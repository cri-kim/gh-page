import Layout from '@/components/main/layout';
import axios from 'axios';
import {InputGroup,FormControl, Col, Row, Card,Form,Button} from 'react-bootstrap';
import React, {useEffect, useState, useCallback, MouseEvent, useRef} from 'react';

function Arts() {

  const [devIcons, setDevIcons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSrc, setSelectedSrc] = useState("");
  const [clipboard, setClipboard] = useState("");
  const [width, setWitdh] = useState(50);
  const [height, setHeight] = useState(50);
  const [size, setSize] = useState({
      width: "50px",
      height: "50px"
    });
    const textarea = useRef();
  
  const addIcons = useCallback(()=>{
    const apiCall = async () => {
      var url = "https://cdn.rawgit.com/konpa/devicon/master/devicon.json";
      var baseUrl = "https://cdn.rawgit.com/konpa/devicon/master/icons/";
      const response = await axios.get(url);
      var icons = [];
      response.data.map((icon)  =>{
        var newIcon = {
          name: icon.name,
          versions: icon.versions.svg,
          main: "",
          src: "",
          show: true
        };
        for (var i = 0, len = icon.versions.font.length; i < len; i++) {
          if (icon.name+icon.versions.font[i] == icon.name+"plain") {
              newIcon.main = icon.name+"-"+icon.versions.font[i];
              break;
            } else if (icon.name+icon.versions.font[i] == icon.name+"line") {
              newIcon.main = icon.name+"-"+icon.versions.font[i];
              break;
            } else if (icon.name+icon.versions.font[i] == icon.name+"original") {
              newIcon.main = icon.name+"-"+icon.versions.font[i];
              break;
            } else if (icon.name+icon.versions.font[i] == icon.name+"plain-wordmark") {
              newIcon.main = icon.name+"-"+icon.versions.font[i];
              break;
            }
        }
        newIcon.src = baseUrl+icon.name+"/"+newIcon.main+".svg";
        icons.push(newIcon);
      });
      setDevIcons(icons);
    };
    apiCall();
    setLoading
  },[]);

  //?????? ??????
  useEffect(() => {
    //????????????
    setLoading(true);
    addIcons();
  },[]);

  const copyToClipboard = () => {
    const el= textarea.current;
    el.select();
    document.execCommand('copy');
    alert('?????? ???????????????.');
  }
  const handleChange = (e) => {
    var searchCtx = e.target.value;
    var icons = [];
    searchCtx = searchCtx.replaceAll("+","plus");

    if(searchCtx.length > 0 ){
      devIcons.map((icon)  =>{
        if(icon.name.includes(searchCtx)){
          icon.show=true;
        }else{
          icon.show=false;
        }
        icons.push(icon);
      });
    }
    else {
      devIcons.map((icon)  =>{
          icon.show=true;
        icons.push(icon);
      });
    }
    setDevIcons(icons);
  }
  const handlClick = (e) =>{
    alert("HTML ????????? ???????????????.\n ???????????? github??? ??????????????????.");
    var src = selectedSrc;
    var width= size.width;
    var height= size.height;
    var html="<img src=\""+src+"\" width=\""+width +"\" height=\""+height+"\"/>"
    setClipboard(html);
  }
  const handleImgClick = (e) => {
    var target = e.currentTarget.getAttribute("src");
    setSelectedSrc(target);
  }
  const handleWidth = (e) => {
    var width = e.target.value;
    var tempSize = size;
    tempSize.width = width+"px";
    setSize(tempSize);
  }
  const handleHeight = (e) => {
    var height = e.target.value;
    var tempSize = size;
    tempSize.height = height+"px";
    setSize(tempSize);
  }

  return (
    <Layout>
        <section>
        <Row>
          <h2>DevIcons</h2>
          <p>
            ??????????????? ?????? ????????? ???????????????.
          </p>
          <p>
            ???????????? ????????? ??? ?????????, ????????? ????????? ????????? ?????? ??? ??? ????????????.
          </p>
        </Row>
        <Row xs="auto">
          <Col>
            <Card>
              <Card.Img variant="top" id="selectedImg"
               src={selectedSrc}
               width={size.width} height={size.height}/>
              <Card.Body>
                <Card.Title>
                  <InputGroup size="sm" className="mb-3">
                    <FormControl aria-label="Small" name="width" placeholder="50"
                    onChange={handleWidth} aria-describedby="inputGroup-sizing-sm" />
                    X
                    <FormControl aria-label="Small"name="height" placeholder="50"
                    onChange={handleHeight} aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Button onClick={handlClick}> HTML ??????</Button>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" ref={textarea} rows={3} onClick={copyToClipboard} value={clipboard} placeholder="???????????? ???????????????." readOnly/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">??????</InputGroup.Text>
            <FormControl aria-label="Small" name="searchCtx" onChange={handleChange} aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        </Row>
        <Row xs={1} md={6} className="g-4">
            {devIcons?.map((icon) => 
              icon.show?
                <Col key={icon.name}>
                  <Card>
                    <Card.Img variant="top" src={icon.src} onClick={handleImgClick}/>
                    <Card.Body>
                      <Card.Title>{icon.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              :null
            )}
          </Row>
        </section>
    </Layout>
  );
}
export default Arts;
