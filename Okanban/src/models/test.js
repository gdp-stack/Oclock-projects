const { List, Card, Project, Label } = require("./index");

testObject = {
  async testFunctionList() {
    const lists = await List.findAll();
    lists.forEach((list) => {
      console.log(list.toJSON());
    });
  },
  async testFunctionProject() {
    const projects = await Project.findAll();
    projects.forEach((project) => {
      console.log(project.toJSON());
    });
  },
  async testFunctionCard() {
    const cards = await Card.findAll();
    cards.forEach((card) => {
      console.log(card.toJSON());
    });
  },
  async testFunctionLabel() {
    const labels = await Label.findAll();
    labels.forEach((label) => {
      console.log(label.toJSON());
    });
  },
  async testFunctionCardLabel() {
    const cards = await Card.findAll({
      include: {
        model: Label,
      },
    });
    cards.forEach((card) => {
      console.log(card.toJSON());
    });
  },
};

// testObject.testFunctionList();
// testObject.testFunctionProject();
// testObject.testFunctionCard();
// testObject.testFunctionLabel();
// testObject.testFunctionCardLabel();
