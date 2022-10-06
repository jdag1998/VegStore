const React = require('react')
const vegs = require('../../models/seed')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { veg } = this.props

        return (
            <DefaultLayout title="Veg Store" >
                    <div class = "index-title">
                    <h1>The Veggie Store </h1>
                    </div>
                    <p class = "page-description">
                        <h2>You can give the Vegetarian Life a try!</h2>
                    This page is in charge of selling vegetarian products for the consumption of people who are vegetarian or want to give vegetarian food a chance.

                    </p>
                    <ul id="vegs-index">
                        {veg.map((veg) => {
                            return (
                               <div class = "index">
                                <li key={veg._id}>
                                    <br></br>
                                  <a>{veg.name}</a> <br></br>
                                   <a><b>{veg.price}</b></a>
                                    <a href={`/vegs/${veg._id}`}>
                                      <br></br>  
                                      <br></br> 
                                        <div class = "images">
                                    <img src={veg.image} width="250" height="200" alt="computer hope"/> 
                                        </div>
                                    </a>
                                </li>
                                </div>
                            )
                        })}
                    </ul>
                        <li id = "image">
                                 
                        </li>
                    <nav>
                        <a href="/vegs/new">Create a new a veg</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;