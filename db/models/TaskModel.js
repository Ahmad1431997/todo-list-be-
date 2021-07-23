const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    status: {
      type: DataTypes.BOOLEAN,
    //   allowNull: false,
    defaultValue: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    priority: {
      type: DataTypes.STRING,
    //   allowNull: false,
    defaultValue: "middle"
    },

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },

    deadline: {
      type: DataTypes.DATE
    },
    details:{
        type:DataTypes.STRING,
    },
    personal:{
        type:DataTypes.BOOLEAN,
    },
    work:{
        type:DataTypes.BOOLEAN,  
        isIn: [["work", "personal"]]
    }
  });


  SequelizeSlugify.slugifyModel(Task, {
    source: ["name"],
  });

  return Task;
};
