import { truncate } from "../../App";
export const ACunit = (props) => (
  <>
    <div className="compare_cont">
    <div className="contents onlyweb" id="hide">
      <div
        className="purple" 
        style={
          {
              height: "inherit",
              // background: "red",
              // transform: "translateY(200px)",
              // display: "block",
              // paddingTop: "10px",
          }
        }
      >
        <div
          className="in_purple_div"
          style={{
            width: "100%",
            // height: "85%",
            // height: "inherit",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
        <div
              className="info"
              id="info"
              style={{
                height: "150px",
              }}
            >
              Name
            </div>
            <div className="info" id="info">
              Brand
            </div>
            {/* <div className="info" id="info">
              Price
            </div> */}
            <div className="info" id="info">
              Model Name
            </div>
            <div
              className="info"
              id="info"
              style={{
                height: "200px",
              }}
            >
              Highlights
            </div>
            <div className="info" id="info">
              Annual Energy Consumption
            </div>
            <div className="info" id="info">
              Battery Type
            </div>
            <div className="info" id="info">
              Capacity in Tons
            </div>
            <div className="info" id="info">
              Condenser Coil
            </div>
            <div className="info" id="info">
              Cooling Capacity
            </div>
            <div className="info" id="info">
              Type
            </div>
            <div className="info" id="info">
              Noise Level
            </div>
            <div className="info" id="info">
              Voltage
            </div>
            <div className="info" id="info">
              Warranty
            </div>
        </div>
      </div>
    </div>
    <div className="contents ">
      <div className="comp_pic">
        <img
          src={props.coverimage1}
          alt={props.data1.Name}
        ></img>
        <div>
          <p>{truncate(props.data1.Name, 25)}</p>
          <div className="onlymobile">
            <div className="crating">
              <span>{props.data2.Rating} <p>*</p></span>
              <div>{props.data2.Rating_Num} Ratings </div>
            </div>
          </div>
        </div>
        {/* <p>{props.data1.Name}</p> */}
        <div className="pr onlyweb">₹{props.data1.Price}</div>
      </div>
      <div
        className="purple1 onlyweb"
        // style={{
        //   height: "1200px",
        //     background: "transparent",
        //   paddingTop: "80px",
        //   transform: "translateY(-235px)",
        // }}
      >
        <div
          style={{
            width: "100%",
            // height: "85%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            // background: "transparent",
          }}
        >
          <div
              className="info info1"
              id="info"
              style={{
                height: "150px",
              }}
            >
              {props.data1.Name == "" ? "-" : props.data1.Name}
            </div>
            <div className="info info1" id="info">
              {props.data1.Brand == "" ? "-" : props.data1.Brand}
            </div>
            {/* <div className="info info1" id="info">
              {props.data1.Price == "" ? "-" : props.data1.Price}
            </div> */}
            <div className="info info1" id="info">
              {props.data1.Model_Name == "" ? "-" : props.data1.Model_Name}
            </div>
            <div
              className="info info1"
              id="info"
              style={{
                height: "200px",
                overflow:"auto"
              }}
            >
              {props.data1.Highlights == "" ? "-" : props.data1.Highlights}
            </div>
            <div className="info info1" id="info">
              {props.data1.Annual_Energy_Consumption == ""
                ? "-"
                : props.data1.Annual_Energy_Consumption}
            </div>
            <div className="info info1" id="info">
              {props.data1.Battery_Type == "" ? "-" : props.data1.Battery_Type}
            </div>
            <div className="info info1" id="info">
              {props.data1.Capacity_in_Tons == ""
                ? "-"
                : props.data1.Capacity_in_Tons}
            </div>
            <div className="info info1" id="info">
              {props.data1.Condenser_Coil == ""
                ? "-"
                : props.data1.Condenser_Coil}
            </div>
            <div className="info info1" id="info">
              {props.data1.Cooling_Capacity == ""
                ? "-"
                : props.data1.Cooling_Capacity}
            </div>
            <div className="info info1" id="info">
              {props.data1.Type == "" ? "-" : props.data1.Type}
            </div>
            <div className="info info1" id="info">
              {props.data1.Noise_Level == "" ? "-" : props.data1.Noise_Level}
            </div>
            <div className="info info1" id="info">
              {props.data1.Voltage == "" ? "-" : props.data1.Voltage}
            </div>
            <div className="info info1" id="info">
              {props.data1.Warranty == "" ? "-" : props.data1.Warranty}
            </div>
        </div>
      </div>
    </div>
    <div className="vs onlymobile">VS</div>
    <div className="contents ">
      <div className="comp_pic">
        <img
          src={props.coverimage2}
          alt={props.data2.Name}
        ></img>
        <div>
          <p>{truncate(props.data2.Name, 25)}</p>
            <div className="onlymobile">
              <div className="crating">
                <span>{props.data1.Rating}<p>*</p></span>
                <div>{props.data1.Rating_Num} Ratings </div>
              </div>
            </div>
        </div> 
        <div className="pr onlyweb">₹{props.data2.Price}</div>
      </div>
      <div
        className="purple2 onlyweb"
        // style={{
        //   height: "1200px",
        //   paddingTop: "80px",
        //   transform: "translateY(-235px)",
        // }}
      >
        <div
          style={{
            width: "100%",
            height: "85%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
         <div
              className="info info1"
              id="info"
              style={{
                height: "150px",
              }}
            >
              {props.data2.Name == "" ? "-" : props.data2.Name}
            </div>
            <div className="info info1" id="info">
              {props.data2.Brand == "" ? "-" : props.data2.Brand}
            </div>
            {/* <div className="info info1" id="info">
              {props.data2.Price == "" ? "-" : props.data2.Price}
            </div> */}
            <div className="info info1" id="info">
              {props.data2.Model_Name == "" ? "-" : props.data2.Model_Name}
            </div>
            <div
              className="info info1"
              id="info"
              style={{
                height: "200px",
                overflow:"auto"
              }}
            >
              {props.data2.Highlights == "" ? "-" : props.data2.Highlights}
            </div>
            <div className="info info1" id="info">
              {props.data2.Annual_Energy_Consumption == ""
                ? "-"
                : props.data2.Annual_Energy_Consumption}
            </div>
            <div className="info info1" id="info">
              {props.data2.Battery_Type == "" ? "-" : props.data2.Battery_Type}
            </div>
            <div className="info info1" id="info">
              {props.data2.Capacity_in_Tons == ""
                ? "-"
                : props.data2.Capacity_in_Tons}
            </div>
            <div className="info info1" id="info">
              {props.data2.Condenser_Coil == ""
                ? "-"
                : props.data2.Condenser_Coil}
            </div>
            <div className="info info1" id="info">
              {props.data2.Cooling_Capacity == ""
                ? "-"
                : props.data2.Cooling_Capacity}
            </div>
            <div className="info info1" id="info">
              {props.data2.Type == "" ? "-" : props.data2.Type}
            </div>
            <div className="info info1" id="info">
              {props.data2.Noise_Level == "" ? "-" : props.data2.Noise_Level}
            </div>
            <div className="info info1" id="info">
              {props.data2.Voltage == "" ? "-" : props.data2.Voltage}
            </div>
            <div className="info info1" id="info">
              {props.data2.Warranty == "" ? "-" : props.data2.Warranty}
            </div>
        </div>
      </div>
    </div>
    </div>
  </>
);
