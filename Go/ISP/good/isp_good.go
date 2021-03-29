package goodisp

import "math"

type shape interface {
	area() float64
}

type object interface {
	shape
	volume() float64
}

type square struct {
	length float64
}

func (s square) area() float64 {
	return math.Pow(s.length, 2)
}

type cube struct {
	square
}

func (c cube) volume() float64 {
	return math.Pow(c.length, 3)
}
