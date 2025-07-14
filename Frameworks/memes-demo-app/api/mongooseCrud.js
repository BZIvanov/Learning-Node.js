module.exports = (Model) => {
  const modelName = Model.modelName;

  return {
    async create(data) {
      try {
        const entity = new Model(data);
        return await entity.save();
      } catch (err) {
        console.error(`[${modelName}] Create failed:`, err);
        throw err;
      }
    },
    async get(id) {
      const entity = await Model.findById(id);
      if (!entity) {
        const message = `${modelName} with id "${id}" does not exist.`;
        console.warn(message);
        throw new Error(message);
      }
      return entity;
    },
    async getAll() {
      return await Model.find();
    },
    async delete(id) {
      const entity = await Model.findById(id);
      if (!entity) {
        const message = `${modelName} with id "${id}" does not exist.`;
        console.warn(message);
        throw new Error(message);
      }
      await entity.remove();
      return entity;
    },
  };
};
