import React from 'react';
import Modal from './Modal'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../history';
import { fetchTask, deleteTask } from '../actions';

class DeleteTask extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteTask(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    return "Are you sure you want to delete the Task ?";
  }

  render() {
    return (
      <Modal
        title="Delete Task"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { task: state.tasks[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchTask, deleteTask }
)(DeleteTask);
