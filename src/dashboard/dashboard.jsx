import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import ContentHeader from '../common/template/contentHeader'
import { getList, getStats } from './dashboardActions'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getList()
    }

    getNextAndPreviousList(url) {
        this.props.getList(url)
    }

    renderRows() {
        const list = this.props.list.results || []
        return list.map((pokemon, index ) => (
            <Link to="/pokemonStats" key={pokemon.url} onClick={() => this.props.getStats(pokemon.url)}>
                    <p>{pokemon.name}</p>
            </Link>
        ))
    }
    
    render(){
        const next = this.props.list.next
        const previous = this.props.list.previous
        return (
            <div>
                <ContentHeader />
                <div className="person-frame">
                    {this.renderRows()}
                </div>
                <div className="button-frame">
                    {previous &&
                    <button id="button-custom" type="submit" onClick={() => this.getNextAndPreviousList(previous)}>Previous</button>
                    }
                    {next &&
                    <button id="button-custom" type="submit" onClick={() => this.getNextAndPreviousList(next)}>Next</button>
                    }
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({list: state.dashboard.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, getStats}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)