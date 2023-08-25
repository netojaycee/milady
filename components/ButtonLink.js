import Button from 'react-bootstrap/Button';

function ButtonLink() {
  return (
    <div className="d-grid primaryss">
      <Button href="https://twitter.com/OnlyMiladyFans" variant="" size="lg">
        <span className='primarys'>BUY $OMF ON TWITTER</span>
      </Button>
      <Button href="https://t.co/36kK6vF8F7" variant="" size="lg">
        <span className='primarys'>BUY $OMF ON TELEGRAM</span>
      </Button>
    </div>
  );
}

export default ButtonLink;