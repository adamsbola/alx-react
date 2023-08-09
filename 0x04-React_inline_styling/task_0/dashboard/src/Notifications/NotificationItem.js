import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  handleClick = () => {
    const { markAsRead, id } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, value, html } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={this.handleClick} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li onClick={this.handleClick} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {
    console.log("Empty func");
  },
};

export default NotificationItem;
