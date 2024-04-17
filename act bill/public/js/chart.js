
const blips = [
    {
        id:1,
        name: 1,
        quadrant: "seeing_now",
        theta: 45,
        radius: 200
    }
]


$(document).ready(()=>{
    let index = 0
    function toRadian(angleInDegrees) {
         return (Math.PI * angleInDegrees) / 180
    }
    const quadrantSize = 500
    const quadrantGap = 32
       const graphConfig = {
          effectiveQuadrantHeight: quadrantSize + quadrantGap / 2,
          effectiveQuadrantWidth: quadrantSize + quadrantGap / 2,
          quadrantHeight: quadrantSize,
          quadrantWidth: quadrantSize,
          quadrantsGap: quadrantGap,
          minBlipWidth: 12,
          blipWidth: 22,
          groupBlipHeight: 24,
          newGroupBlipWidth: 88,
          existingGroupBlipWidth: 124,
          rings: ['Anticipate', 'Analyse', 'Adopt'],
          blip_scale:{
            "seeing_now":{
                scale: .9, angleFactor: 40
            },
            "beginning_to_see":{
                scale: .9, angleFactor: 25
            },
            "on_the_horizon":{
                scale: .84, angleFactor: 20
            }
          },
          quadrants: [
            {name: 'Seeing now', order:'first', startAngle: 0, maxRadius: quadrantSize},
              {name: 'Beginning to see', order:'second', startAngle: 60, maxRadius: quadrantSize * .85},
            {name: 'On the horizon', order:'third', startAngle: 120, maxRadius: quadrantSize * 0.75}
          ],
          groupBlipAngles: [30, 35, 60, 80],
          maxBlipsInRings: [8, 22, 17, 18],
        };
      
      const svg = d3.select('.container div.chart svg');

      svg
        .attr('id', 'looking-glass-plot')
        .attr('width', quadrantSize * 2)
        .attr('height', quadrantSize + 14)
      
      
      graphConfig.quadrants.forEach(quadrant => {
        let quadrantGroup = renderRadarQuadrants(svg, quadrant, graphConfig.rings, graphConfig)
        
      })

      blips.forEach((blip) => {
            
        const x = (graphConfig.quadrantWidth -(blip.radius * Math.cos(blip.theta) * (3.14/180)) * graphConfig.blip_scale[blip.quadrant].scale);
        const y = (graphConfig.quadrantWidth -(blip.radius * Math.sin(blip.theta) * (3.14/180)) * graphConfig.blip_scale[blip.quadrant].scale);

        console.log(x,y);

        drawBlipInCoordinates(blip,
            [x,y],
            //calculateRadarBlipCoordinates(ringCalculator.getRingRadius(i)+50, ringCalculator.getRingRadius(i+1), quadrant.startAngle,quadrant.scale),
            "class-name"
        )
       })

      function RingCalculator(numberOfRings, maxRadius) {
       let sequence = [0, 6, 5, 3, 2, 1, 1, 1];
     
       return{
            sum : (length) => {
                return sequence.slice(0, length + 1).reduce(function (previous, current) {
                    return previous + current
                }, 0)
            },
            getRadius : (ring) => {
                const total = this.sum(numberOfRings)
                const sum = this.sum(ring)
            
                return (maxRadius * sum) / total
              },
              getRingRadius (ringIndex) {
                const ratios = [0, 0.456, 0.832, 1]
                const radius = ratios[ringIndex] * maxRadius
                return radius || 0
              }
       } 
    }
   
 function renderRadarQuadrants(svg , quadrant, rings,
                              graphConfig) {
   const ringCalculator = RingCalculator(graphConfig.rings.length, quadrant.maxRadius)
   const quadrantGroup = svg.append('g')
     .attr('class', `quadrant-group quadrant-group-${quadrant.order}`)
    const color_map = {
        'Anticipate': "#85c9d2", 'Analyse':"#61afba", 'Adopt':"#9a84b6"
    }
    
   rings.forEach(function (ring, i) {
    const startAngle = toRadian(quadrant.startAngle - 30);
    const endAngle = toRadian(quadrant.startAngle - 90);
     const arc = d3.arc()
       .innerRadius(ringCalculator.getRingRadius(i))
       .outerRadius(ringCalculator.getRingRadius(i + 1))
       .startAngle(startAngle)
       .endAngle(endAngle)
     quadrantGroup
       .append('path')
       .attr('d', arc)
       .attr('class', `ring-arc-${i}`)
       .attr('fill', color_map[ring])
       .attr(
         'transform',
         `translate(${graphConfig.quadrantWidth}, ${graphConfig.quadrantHeight})`,
       )

       

       
    })

    
   return quadrantGroup
 }


  function drawBlipCircle(group, blip, xValue, yValue, order) {
     group
       .attr('transform', `scale(1) translate(${xValue}, ${yValue})`)
     // .attr('aria-label', blipAssistiveText(blip))
     group
       .append('circle')
       .attr('r', '12')
       .attr('cx', '18')
       .attr('cy', '18')
       .attr('class', order)
       .style('transform', `scale(${blip.scale || 1})`)
  } 

    function drawBlipInCoordinates(blip, coordinates, order, quadrantGroup) {
     let x = coordinates[0]
     let y = coordinates[1]

     const blipId = blip.id

     const group = quadrantGroup
       .append('g')
       .append('a')
       .attr('href', 'javascript:void(0)')
       .attr('class', 'blip-link')
       .attr('id', 'blip-link-' + blipId)
       .attr('data-blip-id', blipId)
       .attr('data-ring-name', blip.ring)

     
     drawBlipCircle(group, blip, x, y, order)
     

     group
       .append('text')
       .attr('x', 18)
       .attr('y', 23)
       .style('font-size', '12px')
       .attr('font-style', 'normal')
       .attr('font-weight', 'bold')
       .attr('fill', 'white')
       .text(blip.name)
       .style('text-anchor', 'middle')
       .style('transform', `scale(${blip.scale || 1})`)
    }
});