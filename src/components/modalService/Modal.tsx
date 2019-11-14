import React, { Component } from 'react';
import { render } from 'react-dom';

let resolve: Function;

const defaultProps = {
  title: '확인',
  message: '정말 실행하시겠습니까?'
};

class Modal extends Component<ModalProps, ModalState> {
  static create(props = {}) {
    const containerElement = document.createElement('div');
    document.body.appendChild(containerElement);
    return render(<Modal createConfirmProps={props} />, containerElement);
  }

  constructor(props: ModalProps) {
    super(props);

    this.state = {
      isOpen: false,
      showConfirmProps: {},
    };
  }

  handleCancel = () => {
    this.setState({ isOpen: false });
    resolve(false);
  }

  handleConfirm = () => {
    this.setState({ isOpen: false });
    resolve(true);
  }

  show = (props = {}) => {
    const showConfirmProps = { ...this.props.createConfirmProps, ...props };
    this.setState({ isOpen: true, showConfirmProps });
    return new Promise((res) => {
      resolve = res;
    });
  }

  render() {
    const { isOpen, showConfirmProps } = this.state;
    const { message, title } = showConfirmProps;
    return (
      <React.Fragment>
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-wrapper">
                <header className="modal-header">
                  <p className="modal-title">{title || defaultProps.title}</p>
                </header>
                <section className="modal-body">
                  <p>{message || defaultProps.message}</p>
                </section>
                <footer className="modal-footer">
                  <button className="button" onClick={this.handleConfirm}>확인</button>
                  <button className="button" onClick={this.handleCancel}>취소</button>
                </footer>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
