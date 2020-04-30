import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import { Col, Row, Table , Card } from "react-bootstrap";

import happy from "assets/img/happy.png";
import sick from "assets/img/sad.png";
import death from "assets/img/death.png";

const DataGlobal = () => {
  const [korban, setKorban] = useState([]);
  const [sembuh, setSembuh] = useState({ sembuh: [] });
  const [positif, setPositif] = useState({ positif: [] });
  const [meninggal, setMeninggal] = useState({ meninggal: [] });

  const formatNumber = num => String(num).replace(/(.)(?=(\d{3})+$)/g, "$1,");

  useEffect(() => {
    axios
      .get("https://api.kawalcorona.com/")
      .then(res => setKorban(res.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios
      .get("https://api.kawalcorona.com/sembuh/")
      .then(res => setSembuh(res.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios
      .get("https://api.kawalcorona.com/positif/")
      .then(res => setPositif(res.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios
      .get("https://api.kawalcorona.com/meninggal/")
      .then(res => setMeninggal(res.data))
      .catch(console.error);
  }, []);

  return (
    <Row>
      <Col md={12}>
        <h3 className="text-center text-uppercase text-color-orange mb-4">
          dunia
        </h3>
      </Col>
      <Col xs={12} md={4}>
        <Card className="border-0 shadow-sm mb-5 mb-md-0">
          <Card.Body>
            <img
              src={sick}
              alt="pasien positif"
              className="d-block mx-auto"
              width="70"
              height="70"
            />
            <Card.Title className="text-center mt-2">{positif.name}</Card.Title>
            <h3 className="text-center text-danger">{positif.value}</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className="border-0 shadow-sm mb-5 mb-md-0">
          <Card.Body>
            <img
              src={happy}
              alt="pasien sembuh"
              className="d-block mx-auto"
              width="70"
              height="70"
            />
            <Card.Title className="text-center mt-2">{sembuh.name}</Card.Title>
            <h3 className="text-center text-success">{sembuh.value}</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className="border-0 shadow-sm mb-5 mb-md-0">
          <Card.Body>
            <img
              src={death}
              alt="pasien meninggal"
              className="d-block mx-auto"
              width="70"
              height="70"
            />
            <Card.Title className="text-center mt-2">{meninggal.name}</Card.Title>
            <h3 className="text-center text-secondary">{meninggal.value}</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12}>
        <Table hover borderless striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th className="text-uppercase">negara</th>
              <th className="text-uppercase">positif</th>
              <th className="text-uppercase">sembuh</th>
              <th className="text-uppercase">meninggal</th>
            </tr>
          </thead>
          <tbody>
            {korban.map((item, index) => (
              <tr key={item.attributes.OBJECTID}>
                <td>{index + 1}</td>
                <td>{item.attributes.Country_Region}</td>
                <td>{formatNumber(item.attributes.Confirmed)}</td>
                <td>{formatNumber(item.attributes.Recovered)}</td>
                <td>{formatNumber(item.attributes.Deaths)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default memo(DataGlobal);
