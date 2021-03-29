package badisp

import "math"

type shape interface {
	area() float64
	volume() float64
}

type square struct {
	length float64
}

func (s square) area() float64 {
	return s.length * s.length
}

// square is a flat surface -> does not have volume
func (s square) volume() float64 {
	return 0
}

type cube struct {
	length float64
}

func (c cube) area() float64 {
	return math.Pow(c.length, 2)
}

func (c cube) volume() float64 {
	return math.Pow(c.length, 3)
}
