package main

import "fmt"

type quadrangle interface {
	getWidth() int
	setWidth(width int)
	getHeight() int
	setHeight(height int)
}

// Now create a rectangle and implement the interface
type rectangle struct {
	width, height int
}

// Implement getWitdht
func (r *rectangle) getWidth() int {
	return r.width
}

// Implement setWidth
func (r *rectangle) setWidth(width int) {
	r.width = width
}

// Implement getHeight
func (r *rectangle) getHeight() int {
	return r.height
}

// Implement getHeight
func (r *rectangle) setHeight(height int) {
	r.height = height
}

type square struct {
	rectangle
}

func newSquare(side int) *square {
	sq := square{}
	sq.width = side
	sq.height = side
	return &sq
}

func (sq *square) getHeight() int {
	return sq.height
}
func (sq *square) setHeight(height int) {
	sq.height = height
	sq.width = height
}

func (sq *square) getWidth() int {
	return sq.width
}

func (sq *square) setWidth(width int) {
	sq.width = width
	sq.height = width
}

func useQuadrangle(quad quadrangle) {

	width := quad.getWidth()
	quad.setHeight(10)

	expectedArea := 10 * width
	actualArea := quad.getWidth() * quad.getHeight()
	// Expectation : expected area and actual area should be the same
	fmt.Println("Expected Area : ", expectedArea, "Actual Area : ", actualArea, "Width : ", quad.getWidth(), "Height : ", quad.getHeight())

}

func main() {

	rc := &rectangle{2, 3}
	useQuadrangle(rc) // Area should be 20
	sq := newSquare(5)
	useQuadrangle(sq) // Area should be 50

}
