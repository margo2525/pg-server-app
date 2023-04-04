class User {
  static async create ({ firstName, lastName, email, tel }) {
    //прописати sql запит

    const insertQuery = `
    INSERT INTO users (first_name, last_name, email, tel)
    VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
    RETURNING *;
    `;
    try {
      // виконати запит
      const createdUser = await User.pool.query(insertQuery);
      return createdUser.rows[0];
    } catch (err) {
      //повернути результат
      throw new Error(err.detail);
    }
  }

  static async getAll ({ limit, offset }) {
    const selectQuery = `
    SELECT *
    FROM users
    ORDER BY id
    LIMIT ${limit} OFFSET ${offset};
    `;
    try {
      const foundUsers = await User.pool.query(selectQuery);
      return foundUsers.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static getById () {}
  static async updateById (id, { firstName, lastName, email, tel }) {
    const updateQuery = `
      UPDATE users 
      SET  first_name = '${firstName}', last_name = '${lastName}', email = '${email}', tel = '${tel}'
      WHERE id = '${id}'
      RETURNING *;
    `;
    try {
      const updatedUser = await User.pool.query(updateQuery);
      return updatedUser.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async updateById (id, body) {
    const { email, tel } = body;

    const updateQuery = `
    UPDATE users
    SET email = '${email}',
        tel = '${tel}'
    WHERE id = ${id}
    RETURNING *;
    `;
    try {
      const updatedUser = await User.pool.query(updateQuery);
      console.log('updatedUser :>> ', updatedUser);
      return updatedUser.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async deleteById (id) {
    const deleteQuery = `
    DELETE FROM users
    WHERE id = ${id}
    RETURNING id;
    `;
    try {
      const deletedUser = await User.pool.query(deleteQuery);
      console.log('deletedUser :>> ', deletedUser);
      return deletedUser.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = User;
