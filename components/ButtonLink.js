import Button from 'react-bootstrap/Button';

function ButtonLink() {
  return (
    <div className="d-grid gap-2 m-3 primarys">
      <Button href="/" variant="" size="lg">
        <span className='primarys'>Get Coin</span>
      </Button>
    </div>
  );
}

export default ButtonLink;