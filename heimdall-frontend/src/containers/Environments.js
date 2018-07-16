import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, notification } from 'antd'

import { getAllEnvironments, remove, initLoading } from '../actions/environments'

import PageHeader from '../components/ui/PageHeader'
import ListEnvironments from '../components/environments/ListEnvironments';
import Loading from '../components/ui/Loading';
import FloatButton from '../components/ui/FloatButton'

class Environments extends Component {

    componentDidMount() {
        this.props.dispatch(initLoading())
        this.props.dispatch(getAllEnvironments())
    }

    handleDelete = (environmentId) => {
        this.props.dispatch(initLoading())
        this.props.dispatch(remove(environmentId))
    }

    componentWillReceiveProps(newProps) {
        if (newProps.notification && newProps.notification !== this.props.notification) {
            const { type, message, description } = newProps.notification
            notification[type]({ message, description })
        }
    }

    render() {
        const { environments, loading, history } = this.props

        if (!environments) return <Loading />

        return (
            <div>
                <PageHeader title="Environments" icon="codepen" />
                <Row className="h-row bg-white">
                    <ListEnvironments environments={environments} handleDelete={this.handleDelete} />
                    {loading && <Loading />}

                    <FloatButton history={history} to="/environments/new" label="Add new Environment" />
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        environments: state.environments.environments,
        notification: state.environments.notification,
        loading: state.environments.loading
    }
}

export default connect(mapStateToProps)(Environments)