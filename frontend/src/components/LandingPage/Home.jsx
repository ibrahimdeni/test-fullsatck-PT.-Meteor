import { Button, Card, Carousel, Form } from "react-bootstrap";
import Buku1 from "../../assets/images/images.jpeg";
import Buku2 from "../../assets/images/books-oke.png";
import Buku3 from "../../assets/images/books1-oke.png";
import Calm from "../../assets/images/calm1-oke.png";
import Online from "../../assets/images/Online1-oke.png";

function LandingPage() {
  return (
    <>
      <div className="bg-hero">
        <div className="text-hero">
          <h1>Hi There!</h1>
          <h1>
            Welcome to <span className="text-info"> The Library</span>
          </h1>
        </div>
      </div>
      <div className="w-100 bg-main">
        <div className="w-25 h-100 pt-5 pb-3 mx-auto">
          <h3 className="text-center py-3 shadow rounded-5 bg-must">
            Why must The Library?
          </h3>
        </div>
        <div className="mb-5">
          <Card className="mx-3 bg-carousel d-flex">
            <div className="w-100 mx-auto" style={{ height: "380px" }}>
              <Carousel variant="dark mt-3">
                <Carousel.Item>
                  <div className="d-flex">
                    <div className="w-50">
                      <img
                        className="d-block w-100"
                        src={Buku2}
                        alt="First slide"
                      />
                    </div>
                    <div className="w-75 pt-5 fw-semibold">
                      <h2 className="mb-3">Various Books, Many Categories</h2>
                      <p className="fs-4">
                        <span className="text-danger">Becareful!</span> because
                        there are sooo many books with many categories here,
                        which might confuse you hhaha~
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex">
                    <div className="w-50">
                      <img
                        className="d-block w-100"
                        src={Buku3}
                        alt="First slide"
                      />
                    </div>
                    <div className="w-75 pt-5 fw-semibold">
                      <h2 className="mb-3">We Up To Date!</h2>
                      <p className="fs-4">
                        We will ensure that the books in The Library are always
                        up to date. We will serve you the best!.
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex">
                    <div className="ps-5 ms-3 pt-4 w-50">
                      <img
                        className="d-block img-carousel1"
                        src={Online}
                        alt="First slide"
                      />
                    </div>
                    <div className="w-75 pt-5 fw-semibold">
                      <h2 className="mb-3">Read Them Online~</h2>
                      <p className="fs-4">
                        No Need to Buy the Books, Just read them Online,
                        Anytime, Anywhere!. Save Our Trees and Your Time.
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex">
                    <div className="ps-5 pt-4 w-50">
                      <img
                        className="d-block img-carousel"
                        src={Calm}
                        alt="First slide"
                      />
                    </div>
                    <div className="w-75 pt-5 fw-semibold">
                      <h2 className="mb-3"> And YA, IT'S FREE!</h2>
                      <p className="fs-4">
                        Don't worry about your wallet, you can enjoy our books
                        for free hehe, isn't it great hm?~
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Card>
        </div>
        <div className="W-100 container-sm">
          <div className="w-75 mb-4 mx-auto shadow rounded-5 bg-must d-flex">
            <div className="w-50">
              <h3 className="ps-5 text-start py-3 ">Search Books</h3>
            </div>
            <div className="pt-3 w-75">
              <Form.Control
                className="w-75 shadow-sm ms-auto me-3 rounded-5 text-form-book"
                type="text"
                placeholder="find by title here"
              />
            </div>
          </div>
        </div>

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
                        author: <br />
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

        <div className="w-25 h-100 pt-4 pb-3 mx-auto">
          <h3 className="text-center shadow py-3 rounded-5 bg-must">
            Categories
          </h3>
        </div>

        <Card className="mx-2">
          <div className="row px-3">
            <Card className="col-sm-4 card-category CC1">
              <h1 className="TCB">Novel</h1>
            </Card>
            <Card className="col-sm-4 card-category CC2">
              <h1 className="TCB">Encyclopedia</h1>
            </Card>
            <Card className="col-sm-4 card-category CC3">
              <h1 className="TCB">Comic</h1>
            </Card>
            <Card className="col-sm-4 card-category CC4">
              <h1 className="TCB">Magazine</h1>
            </Card>
            <Card className="col-sm-4 card-category CC5">
              <h1 className="TCB">Journal</h1>
            </Card>
            <Card className="col-sm-4 card-category CC6">
              <h1 className="TCB">Tutorial</h1>
            </Card>
          </div>
        </Card>

        <div className="footer mt-3 border border-light border-4">
          <h1 className="mt-2 text-footer pb-2 text-center">
            Test PT Meteor_Library Website_by Ibrahim Deni Haryanto
          </h1>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
