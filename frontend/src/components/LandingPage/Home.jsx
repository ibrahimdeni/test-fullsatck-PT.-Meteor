import { Button, Card, Container } from "react-bootstrap";
import Buku1 from "../../assets/images/images.jpeg";

function WithHeaderStyledExample() {
  return (
    <Container>
      <div className="row">
        <div className="col-sm-6">
          <Card className="m-2">
            <Card.Header as="h5">Category</Card.Header>
            <div className="d-flex p-1">
              <Card className="w-50">
                <img className="bukuImg" src={Buku1} alt="test" />
              </Card>
              <div className="w-75">
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text style={{ fontSize: "13px" }} className="lh-3">
                    <p className="fw-semibold">
                      author: <br />
                      publisher: <br />
                      published: <br />
                      pages: <br />
                      isbn: <br />
                      book status: <br />
                    </p>
                  </Card.Text>
                  <div style={{ marginTop: "30px" }} className="w-100 d-flex">
                    <Button variant="primary ms-auto px-5">Borrow</Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-sm-6">
          <Card className="m-2">
            <Card.Header as="h5">Category</Card.Header>
            <div className="d-flex p-1">
              <Card className="w-50">
                <img className="bukuImg" src={Buku1} alt="test" />
              </Card>
              <div className="w-75">
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text style={{ fontSize: "13px" }} className="lh-3">
                    <p className="fw-semibold">
                      author: <br />
                      publisher: <br />
                      published: <br />
                      pages: <br />
                      isbn: <br />
                      book status: <br />
                    </p>
                  </Card.Text>
                  <div style={{ marginTop: "30px" }} className="w-100 d-flex">
                    <Button variant="primary ms-auto px-5">Borrow</Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>{" "}
        <div className="col-sm-6">
          <Card className="m-2">
            <Card.Header as="h5">Category</Card.Header>
            <div className="d-flex p-1">
              <Card className="w-50">
                <img className="bukuImg" src={Buku1} alt="test" />
              </Card>
              <div className="w-75">
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text style={{ fontSize: "13px" }} className="lh-3">
                    <p className="fw-semibold">
                      author: <br />
                      publisher: <br />
                      published: <br />
                      pages: <br />
                      isbn: <br />
                      book status: <br />
                    </p>
                  </Card.Text>
                  <div style={{ marginTop: "30px" }} className="w-100 d-flex">
                    <Button variant="primary ms-auto px-5">Borrow</Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>{" "}
        <div className="col-sm-6">
          <Card className="m-2">
            <Card.Header as="h5">Category</Card.Header>
            <div className="d-flex p-1">
              <Card className="w-50">
                <img className="bukuImg" src={Buku1} alt="test" />
              </Card>
              <div className="w-75">
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text style={{ fontSize: "13px" }} className="lh-3">
                    <p className="fw-semibold">
                      author: <br />
                      publisher: <br />
                      published: <br />
                      pages: <br />
                      isbn: <br />
                      book status: <br />
                    </p>
                  </Card.Text>
                  <div style={{ marginTop: "30px" }} className="w-100 d-flex">
                    <Button variant="primary ms-auto px-5">Borrow</Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>{" "}
        <div className="col-sm-6">
          <Card className="m-2">
            <Card.Header as="h5">Category</Card.Header>
            <div className="d-flex p-1">
              <Card className="w-50">
                <img className="bukuImg" src={Buku1} alt="test" />
              </Card>
              <div className="w-75">
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text style={{ fontSize: "13px" }} className="lh-3">
                    <p className="fw-semibold">
                      author: <br />
                      publisher: <br />
                      published: <br />
                      pages: <br />
                      isbn: <br />
                      book status: <br />
                    </p>
                  </Card.Text>
                  <div style={{ marginTop: "30px" }} className="w-100 d-flex">
                    <Button variant="primary ms-auto px-5">Borrow</Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default WithHeaderStyledExample;
