package main

import (
	"machine"
	"time"
)

func main() {
	led := machine.LED
	led.Configure(machine.PinConfig{Mode: machine.PinOutput})
	led.High()

	light1 := machine.D0
	light1.Configure(machine.PinConfig{Mode: machine.PinOutput})
	light1.Set(false)

	light2 := machine.D1
	light2.Configure(machine.PinConfig{Mode: machine.PinOutput})
	light1.High()

	for {
		light1.High()
		light2.High()
		time.Sleep(2000 * time.Millisecond)
		light1.Low()
		light2.Low()
		time.Sleep(2000 * time.Millisecond)

	}
}
