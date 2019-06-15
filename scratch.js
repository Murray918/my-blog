<div>
{this.state.tempPost !== '' ? <h1>{this.state.tempPost}</h1> : null}
</div>
<div>
{!!this.state.isPosting ? (
    <textarea
        type="tex
t"
        onChange={this.handleChange}
        value={this.state.tempPost}
        name="tempPost"
    />
) : null}
</div>
<button onClick={this.handleClick}>Click Me</button>