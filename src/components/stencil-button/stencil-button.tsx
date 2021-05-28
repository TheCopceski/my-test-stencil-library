import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-button',
  styleUrl: 'stencil-button.css',
  shadow: true,
})
export class StencilButton {

  @Prop() buttonText: string = "OK!";

  render() {
    return (
        <div class="wrapper">
          <div class="textLabel">
            {this.buttonText}
          </div>
        </div>
    );
  }
}
