const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class New extends React.Component {
  render() {
    return (
      <div class="content">
        <DefaultLayout title="Create a New Veggie Product" vegGroup="vegs">
          <h1>Create New Product</h1>

          <form action="/vegs" method="POST">
            <div class="new-content">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <br></br>
              <label htmlFor="brand">Brand:</label>
              <input type="text" id="brand" name="brand" />
              <br></br>
              <label htmlFor="descript">Description:</label>
              <input type="text" id="descript" name="descript" />

              <br></br>
              <label htmlFor="image">Image Link:</label>
              <input type="url" id="image" name="image" />

              <br></br>
              <label htmlFor="price">Price:</label>
              <input type="text" id="price" name="price" />
              <br></br>

              <label htmlFor="stock">Is the product in stock? :</label>
              <input type="checkbox" id="stock" name="stock" />
              <br></br>

              <input type="submit" value="Create a New Veggie Product" />
            </div>
          </form>
        </DefaultLayout>
      </div>
    );
  }
}

module.exports = New;
