package gooddip

type MySQL struct {
}

func (db MySQL) Query() {
	// logic here ...
}

type PostgreSQL struct {
}

func (db PostgreSQL) Query() {
	// logic here ...
}

type DBConn interface {
	Query() interface{}
}

type UsersRepository struct {
	db DBConn
}

func (r UsersRepository) GetUsers() {
	// var users []string
	// res := r.db.Query()

	// switch res.(type) {
	// case map[string]string:
	// 	for _, u := range res.(map[string]string) {
	// 		users = append(users, u)
	// 	}
	// 	return users
	// case []string:
	// 	return res.([]string)
	// }
}
