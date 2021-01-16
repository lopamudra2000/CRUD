import React from 'react';
import ModalTab from './Modal'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../history';
import { fetchTask, deleteTask } from '../actions';
import { Button} from 'reactstrap';


class DeleteTask extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <Button
          onClick={() => this.props.deleteTask(id)}
          className="ui button negative"
        >
          Delete
        </Button>
        <Link to="/">
          <Button>
            cancel
          </Button>
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    return "Are you sure you want to delete the Task ?";
  }

  render() {
    return (
      <ModalTab
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
