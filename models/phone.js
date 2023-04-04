class Phone {
  static create () {}

  static async getAll ({ limit, offset }) {
    const selectQuery = `
    SELECT *
    FROM phones
    ORDER BY id
    LIMIT ${limit} OFFSET ${offset};
    `;
    try {
      const foundPhones = await Phone.pool.query(selectQuery);
      return foundPhones.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static getById () {}
  static updateById () {}
  static deleteByid () {}
}

module.exports = Phone;
