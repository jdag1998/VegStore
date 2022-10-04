const React = require('react')
const vegs = require('../../models/seed')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { veg } = this.props

        return (
            <DefaultLayout title="Veg Store" >
                    <h1>The Veggie Store </h1>
                    <ul id="vegs-index">
                        {veg.map((veg) => {
                            return (
                                <li key={veg._id}>
                                    The <a href={`/vegs/${veg._id}`}>{veg.name}</a> is {veg.brand}.
                                    <a href={`/vegs/${veg._id}`}>
                                    <img src={veg.image}/> 
                                    </a>
                                    
                                    {console.log(veg)}
                                </li>
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