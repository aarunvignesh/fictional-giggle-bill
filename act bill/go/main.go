package main

import "fmt"

func main() {
	var a = [5]string{"abc", "aa", "bb", "cc", "dd"}
	var b = []struct {
		i   int
		str string
	}{
		{1, "a"},
		{2, "b"},
		{3, "c"},
	}
	fmt.Println(len(a))
	fmt.Println(a[2:4])
	fmt.Printf("Length: %d, Capacity: %d, Data: %v", len(b), cap(b), b[:2])
}
