import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from './dashboardActions'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list.results || []
        return list.map((pk, i ) => (
            <a href={"/#/"} key={pk.url}>
                <p>{pk.name}</p>
            </a>
        ))
    }

    onClickPrevious() {
        const { steps, currentStep } = this.state;
        this.setState({
          currentStep: currentStep - 1,
        });
    }
    
    render(){
        const next = this.props.list.next
        const previous = this.props.list.previous
        return (
            <div>
                <div className="person-frame">
                    {this.renderRows()}
                </div>
                <div className="button-frame">
                    {previous &&
                    <button type="submit" onClick={() => this.props.getList(previous)}>Previous</button>
                    }
                    <button type="submit" onClick={() => this.props.getList(next)}>Next</button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({list: state.dashboard.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)