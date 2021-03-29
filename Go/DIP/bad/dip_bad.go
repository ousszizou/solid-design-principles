package baddip

type MySQL struct {
}

func (db MySQL) QueryMySQL() {
	// logic here ...
}

type PostgreSQL struct {
}

func (db PostgreSQL) QueryPostgreSQL() {
	// logic here ...
}

type UsersRepository struct {
	db MySQL
	//db PostgreSQL
}

func (r UsersRepository) GetUsers() {
	res := r.db.QueryMySQL()
	//res := r.db.QueryPostgreSQL()

	var users []string
	for _, u := range res {
		users = append(users, u)
	}
	return users
}
