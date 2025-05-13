/*The Farmland Maximum Area Problem is usually based on identifying connected plots of farmland and finding the largest connected component (area).

This is a classic connected components problem in a 2D matrix — commonly solved using DFS (Depth-First Search) or BFS.

🧩 Problem Definition (Farmland Area)
Given a binary matrix grid where:

1 = farmland

0 = not farmland

Find the area of the largest connected region of farmland (i.e., largest cluster of 1s that are connected 4-directionally — up, down, left, right).
*/

function maxFarmlandArea(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxArea = 0;

    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));

    const directions = [
        [0, 1],  // right
        [1, 0],  // down
        [0, -1], // left
        [-1, 0], // up
    ];

    function dfs(r, c) {
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            grid[r][c] === 0 ||
            visited[r][c]
        ) return 0;

        visited[r][c] = true;
        let area = 1;

        for (let [dr, dc] of directions) {
            area += dfs(r + dr, c + dc);
        }

        return area;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1 && !visited[r][c]) {
                maxArea = Math.max(maxArea, dfs(r, c));
            }
        }
    }

    return maxArea;
}

// Example:
const grid = [
  [1, 0, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1]
];

console.log(maxFarmlandArea(grid));