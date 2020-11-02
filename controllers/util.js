module.exports.upsert = (values, condition, model, transaction = false) => {
  if (!transaction) {
    return model
      .findOne({
        where: condition
      })
      .then((obj) => {
        // update
        if (obj) return obj.update(values);
        // insert
        return model.create(values);
      });
  }

  return model
    .findOne({
      where: condition
    })
    .then((obj) => {
      // update
      if (obj) {
        return obj.update(values, {
          transaction,
        });
      }
      // insert
      return model.create(values, {
        transaction,
      });
    });
};