package badsrp

import (
	"encoding/json"
	"fmt"
)

//ReportBad type
type ReportBad struct {
	Title string
	Date  string
}

func (r *ReportBad) getTitle() string {
	return r.Title
}

func (r *ReportBad) getDate() string {
	return r.Date
}

func (r *ReportBad) getContents() (string, string) {
	return r.Title, r.Date
}

func (r *ReportBad) formatJSON() ([]byte, error) {
	answer, err := json.Marshal(r)
	if err != nil {
		return nil, fmt.Errorf("Method: formatJSON, err: %v", err)
	}

	return answer, nil
}
