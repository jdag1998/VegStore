const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { veg } = this.props

        return (
            <DefaultLayout title="Veg Store" >
                    <h1>Fruits Index Page</h1>
                    <ul id="vegs-index">
                        {veg.map((veg) => {
                            return (
                                <li key={veg._id}>
                                    The <a href={`/vegs/${veg._id}`}>{veg.name}</a> is {veg.brand}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/fruits/new">Create a new a veg</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;