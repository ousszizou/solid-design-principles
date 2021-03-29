package goodsrp

import (
	"encoding/json"
	"fmt"
)

// ReportGood type
type ReportGood struct {
	Title string
	Date  string
}

func (r *ReportGood) getTitle() string {
	return r.Title
}

func (r *ReportGood) getDate() string {
	return r.Date
}

func (r *ReportGood) getContents() (string, string) {
	return r.Title, r.Date
}

// ReportFormat type
type ReportFormat struct {
}

func (rf *ReportFormat) formatJSON(r *ReportGood) ([]byte, error) {
	answer, err := json.Marshal(r)
	if err != nil {
		return nil, fmt.Errorf("Method: formatJSON, err: %v", err)
	}

	return answer, nil
}
