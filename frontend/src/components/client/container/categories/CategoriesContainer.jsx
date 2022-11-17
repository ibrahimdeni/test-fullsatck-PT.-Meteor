import React from "react";
import { Button, Card } from "react-bootstrap";
import Buku1 from "../../../../assets/images/images.jpeg";

const CategoriesContainer = () => {
  return (
    <div className="w-100 py-4 bg-main">
      <Card className="m-1 bg-book-list rounded-5">
        <Card.Header
          className="text-center fw-semibold title-book-list"
          as="h3"
        >
          Books lists
        </Card.Header>
        <div className="row m-2 d-flex">
          <div className="col-md-4 py-1 ms-1 bg-card-book my-3">
            <div className="d-flex">
              <Card className="card-book">
                <img className="bukuImg rounded" src={Buku1} alt="test" />
              </Card>
              <div className="w-75 BC-bottom">
                <div className="m-3">
                  <Card.Title className="fs-5">
                    Title <br />{" "}
                    <span className="text-muted author">by. Author</span>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "13px" }} className="lh-3">
                    <p className="fw-semibold">
                      category: <br />
                      publisher: <br />
                      published: <br />
                      pages: <br />
                      isbn: <br />
                      book status: <br />
                    </p>
                  </Card.Text>
                  <div className="w-100 d-flex position-relative">
                    <Button variant="outline-secondary position-absolute bottom-75 fw-semibold w-100 ms-auto px-5 align-items-end">
                      Borrow
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CategoriesContainer;
