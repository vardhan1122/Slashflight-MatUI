import React from 'react';
import { AccountBalanceWalletOutlined } from "@material-ui/icons";
import { BarChartOutlined } from "@material-ui/icons";
import { CompareArrowsOutlined } from "@material-ui/icons";
import { DoubleArrowOutlined } from "@material-ui/icons";
import { FilterFramesOutlined } from "@material-ui/icons";
import { FlightTakeoffOutlined } from "@material-ui/icons";
import { HomeOutlined } from "@material-ui/icons";
import { KeyboardArrowDownOutlined } from "@material-ui/icons";
import { LibraryBooksOutlined } from "@material-ui/icons";
import { LocationOnOutlined } from "@material-ui/icons";
import { PermIdentityOutlined } from "@material-ui/icons";
import { SettingsOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function SlashflightMatUI(props) {
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Container
          maxWidth="xl"
          style={{
            backgroundColor: "rgba(155,155,155,0.85)",
            borderRadius: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Grid
            container
            style={{ borderRadius: "20px", backgroundColor: "#f0f1f5" }}
          >
            <Grid
              zeroMinWidth
              item
              sm={2}
              xs={2}
              lg={3}
              md={3}
              style={{
                borderRadius: "20px",
                paddingBottom: "20px",
                background: "#4c56c0",
              }}
            >
              <div>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-around"
                  direction="row"
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    background: "#4852b6",
                  }}
                >
                  <Grid zeroMinWidth item style={{ paddingTop: "25px" }}>
                    <Avatar
                      src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA0fHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "60px", height: "60px" }}
                    ></Avatar>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Typography variant="h6" style={{ color: "#ffffff" }}>
                      KUMAR
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container>
                  <Grid item zeroMinWidth>
                    <List>
                      <ListItem button>
                        <ListItemIcon>
                          <HomeOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "40px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <FlightTakeoffOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "40px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <IconButton style={{ marginLeft: "-20px" }}>
                          <DoubleArrowOutlined style={{ color: "#f0f1f5" }} />
                        </IconButton>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <AccountBalanceWalletOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "40px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <LibraryBooksOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "40px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <BarChartOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "40px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <SettingsOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "40px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container>
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="body2"
                      style={{
                        color: "#84ce95",
                        paddingTop: "20px",
                        paddingLeft: "20px",
                      }}
                    >
                      ACTIVE USERS
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div
                style={{
                  borderRadius: "20px",
                  padding: "20px",
                  margin: "10px",
                }}
              >
                <Grid container>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      style={{
                        borderStyle: "solid",
                        marginLeft: "-10px",
                        borderColor: "#4852b6",
                      }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup style={{ marginLeft: "-10px" }}>
                    <Avatar
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjYxfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ borderStyle: "solid", borderColor: "#4852b6" }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQxfHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ marginLeft: "-10px", borderColor: "#4852b6" }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEyfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ marginLeft: "-10px", borderColor: "#4852b6" }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup>
                    <Avatar
                      style={{
                        marginLeft: "-10px",
                        background: "#84ce95",
                        borderColor: "#4852b6",
                      }}
                    >
                      +70
                    </Avatar>
                  </AvatarGroup>
                </Grid>
              </div>
            </Grid>
            <Grid
              zeroMinWidth
              item
              xl={9}
              md={9}
              sm
              xs
              lg={9}
              style={{ marginBottom: "30px" }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "20px",
                  margin: "20px",
                }}
              >
                <Grid container>
                  <Grid zeroMinWidth item xl={6} md={12} sm={12} lg={6} xs={12}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid
                          zeroMinWidth
                          item
                          xl={5}
                          md={5}
                          sm={5}
                          lg={5}
                          xs={5}
                        >
                          <IconButton
                            size="small"
                            style={{
                              fontSize: "12px",
                              fontFamily: "arimo",
                              outline: "none",
                              fontWeight: "900",
                            }}
                          >
                            <LocationOnOutlined
                              style={{
                                color: "#84ce95",
                                fontSize: "35px",
                                paddingRight: "5px",
                              }}
                            />
                            NEW YORK (JFK)
                          </IconButton>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xl={2}
                          md={2}
                          sm={2}
                          lg={2}
                          xs={2}
                        >
                          <IconButton
                            size="small"
                            style={{
                              outline: "none",
                              paddingLeft: "15px",
                              paddingRight: "15px",
                            }}
                          >
                            <CompareArrowsOutlined
                              style={{
                                borderRadius: "50px",
                                backgroundColor: "#84ce95",
                                width: "35px",
                                padding: "5px",
                                height: "35px",
                              }}
                            />
                          </IconButton>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xl={5}
                          md={5}
                          sm={5}
                          lg={5}
                          xs={5}
                        >
                          <IconButton
                            size="small"
                            style={{
                              fontSize: "12px",
                              fontFamily: "arimo",
                              outline: "none",
                              fontWeight: "900",
                              paddingRight: "10px",
                            }}
                          >
                            <LocationOnOutlined
                              style={{
                                color: "#84ce95",
                                fontSize: "35px",
                                paddingRight: "5px",
                              }}
                            />
                            BOMBAY (BOM)
                          </IconButton>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item xl={3} md={6} sm={6} lg={3} xs={6}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <input
                        type="date"
                        style={{
                          border: "none",
                          padding: "4px 0px",
                          outline: "none",
                          color: "#757272",
                          background: "none",
                          width: "140px",
                          fontSize: "15px",
                          fontFamily: "arimo",
                        }}
                      ></input>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item xl={3} md={6} sm={6} lg={3} xs={6}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "8px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        size="small"
                        style={{
                          fontSize: "12px",
                          fontFamily: "arimo",
                          outline: "none",
                          fontWeight: "900",
                        }}
                      >
                        <PermIdentityOutlined
                          style={{
                            color: "#84ce95",
                            fontSize: "30px",
                            marginRight: "5px",
                          }}
                        />
                        2 TRAVELLER
                      </IconButton>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item xl={6} md={12} sm={12} lg={6} xs={12}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item lg={4} xl={4} md={4}>
                          <Button
                            size="small"
                            style={{
                              borderRadius: "20px",
                              marginLeft: "-5px",
                              padding: "10px 30px",
                              outline: "none",
                              color: "rgba(255,255,255,0.9)",
                              background: "#84ce95",
                              fontWeight: "900",
                              fontSize: "12px",
                              fontFamily: "arimo",
                              textAlign: "left",
                            }}
                          >
                            ONE WAY
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item lg={4} xl={4} md={4}>
                          <div style={{ paddingLeft: "17px" }}>
                            <Button
                              size="small"
                              style={{
                                fontSize: "12px",
                                padding: "10px",
                                fontFamily: "arimo",
                                outline: "none",
                                color: "rgba(74,74,74,0.88)",
                                fontWeight: "900",
                              }}
                            >
                              ROUND TRIP
                            </Button>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item lg={4} xl={4} md={4}>
                          <div
                            style={{ textAlign: "right", paddingLeft: "17px" }}
                          >
                            <Button
                              size="small"
                              style={{
                                fontSize: "12px",
                                padding: "10px",
                                fontFamily: "arimo",
                                outline: "none",
                                color: "rgba(74,74,74,0.88)",
                                fontWeight: "900",
                              }}
                            >
                              MULTI CITY
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item xl={3} md={6} sm={6} lg={3} xs={6}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        size="small"
                        style={{
                          fontSize: "12px",
                          fontFamily: "arimo",
                          outline: "none",
                          fontWeight: "900",
                        }}
                      >
                        <FilterFramesOutlined
                          style={{ color: "#84ce95", marginRight: "10px" }}
                        />
                        FIRST CLASS
                      </IconButton>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item xl={3} md={6} sm={6} lg={3} xs={6}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        background: "#4852b6",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        style={{
                          color: "rgba(255,255,255,0.84)",
                          outline: "none",
                        }}
                      >
                        SEARCH
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ margin: "20px" }}>
                <Grid container>
                  <Grid
                    zeroMinWidth
                    item
                    xl={6}
                    md={5}
                    sm={4}
                    lg={6}
                    xs={4}
                    style={{ paddingLeft: "5px" }}
                  >
                    <div style={{ marginTop: "25px" }}>
                      <Typography
                        variant="h6"
                        align="left"
                        style={{ color: "rgba(0,0,0,0.68)" }}
                      >
                        RESULTS (25)
                      </Typography>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item xl={2} md={2} sm={2} lg={2} xs={2}>
                    <div
                      style={{
                        borderRadius: "20px",
                        backgroundColor: "#ffffff",
                        padding: "5px  0px",
                        marginTop: "25px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          color: "rgba(74,74,74,0.62)",
                          fontSize: "14px",
                        }}
                      >
                        FILTER
                      </Typography>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item xl={1} md={1} sm={1} lg={1} xs={1} />
                  <Grid zeroMinWidth item xl={3} md={4} sm={5} lg={3} xs={5}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "4px 0px",
                        marginTop: "25px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          color: "rgba(74,74,74,0.62)",
                          fontSize: "14px",
                        }}
                      >
                        TICKET OF CLASS
                        <IconButton style={{ padding: "0px" }}>
                          <KeyboardArrowDownOutlined />
                        </IconButton>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ margin: "20px", marginTop: "50px" }}>
                <Grid container>
                  <Grid zeroMinWidth item xl={8} md={12} sm={12} lg={8} xs={12}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <img
                              src="https://i.pinimg.com/originals/2e/e8/f0/2ee8f07cf98ec8ef0875a0d2e24f27e8.png"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              EMIRATES
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                1,752
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIkJxl09zpENBgoH4cEHRsOCaRQgvqKTUhtA&usqp=CAU"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              KUWAIT AIRWAYS
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                2,072
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYcTdc0B0ea3hbMyKAKLB41KP25cYI1BC9BA&usqp=CAU"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              LUFTHANSA
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                1,852
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <img
                              src="https://i.pinimg.com/originals/e9/d9/c6/e9d9c6384f5719a995b773b7a2bc5b37.png"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              BRITISH AIRWAYS
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={2} xs={2} md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                1.752
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item xl={4} md={12} sm={12} lg={4} xs={12}>
                    <div
                      style={{
                        backgroundColor: "#4c56c0",
                        borderRadius: "20px",
                        marginLeft: "10px",
                        padding: "20px",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.61)" }}
                            >
                              FROM
                            </Typography>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.87)" }}
                            >
                              JFK
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={6} xs={6} md={6}>
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.55)" }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item sm={3} xs={3} md={3}>
                          <div style={{ textAlign: "right" }}>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.57)" }}
                            >
                              TO
                            </Typography>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.87)" }}
                            >
                              BOM
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="center"
                        direction="row"
                        style={{ marginTop: "30px" }}
                      >
                        <Grid zeroMinWidth item>
                          <div>
                            <img
                              src="https://www.fly4free.com/wp-content/uploads/2017/05/map-98.png"
                              style={{ borderRadius: "20px", width: "100%" }}
                            ></img>
                          </div>
                        </Grid>
                      </Grid>
                      <div style={{ textAlign: "center" }}>
                        <Grid container style={{ marginTop: "30px" }}>
                          <Grid zeroMinWidth item sm={4} xs={4} md={4}>
                            <div style={{ textAlign: "left" }}>
                              <Typography
                                variant="body2"
                                align="left"
                                display="inline"
                                style={{
                                  color: "rgba(255,255,255,0.82)",
                                  fontSize: "12px",
                                  background: "#84ce95",
                                  padding: "5px 10px",
                                  borderRadius: "20px",
                                }}
                              >
                                NON STOP
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item sm={4} xs={4} md={4}>
                            <div style={{ padding: "5px" }}>
                              <Typography
                                variant="body2"
                                style={{
                                  color: "rgba(255,255,255,0.82)",
                                  fontSize: "12px",
                                }}
                              >
                                ONE STOP
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item sm={4} xs={4} md={4}>
                            <div style={{ padding: "5px" }}>
                              <Typography
                                variant="body2"
                                style={{
                                  color: "rgba(255,255,255,0.82)",
                                  fontSize: "12px",
                                }}
                              >
                                MORE STOP
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "30px" }}>
                          <Grid zeroMinWidth item sm={12} xs={12} md={12}>
                            <div style={{ textAlign: "left" }}>
                              <Typography
                                variant="body2"
                                style={{
                                  color: "rgba(255,255,255,0.81)",
                                  fontSize: "12px",
                                }}
                              >
                                PRICE
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid zeroMinWidth item sm={12} xs={12} md={12}>
                            <div
                              style={{
                                backgroundColor: "rgba(155,155,155,0.56)",
                                marginTop: "25px",
                                height: "2px",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "8px",
                                  marginLeft: "40px",
                                  width: "16px",
                                  marginTop: "-5px",
                                  float: "left",
                                  height: "16px",
                                }}
                              ></div>
                              <div
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "8px",
                                  paddingLeft: "-300px",
                                  width: "16px",
                                  marginTop: "-5px",
                                  float: "right",
                                  height: "16px",
                                  marginRight: "40px",
                                }}
                              ></div>
                            </div>
                            <div
                              style={{
                                color: "#ffffff",
                                fontSize: "15px",
                                marginTop: "20px",
                              }}
                            >
                              <span
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "20px",
                                  marginLeft: "15px",
                                  padding: "5px 20px",
                                  float: "left",
                                }}
                              >
                                $500
                              </span>
                              <span
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "20px",
                                  padding: "5px 20px",
                                  float: "right",
                                  marginRight: "15px",
                                }}
                              >
                                $700
                              </span>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Hidden only={["lg", "xl"]} smDown implementation="css">
        <Container
          maxWidth="xl"
          style={{
            backgroundColor: "rgba(155,155,155,0.9)",
            borderRadius: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Grid
            container
            alignContent="flex-start"
            alignItems="flex-start"
            justify="space-around"
            direction="row"
            style={{ borderRadius: "20px", backgroundColor: "#f0f1f5" }}
          >
            <Grid
              zeroMinWidth
              item
              xl={3}
              md={3}
              sm={12}
              xs={12}
              lg={3}
              style={{
                borderRadius: "20px",
                paddingBottom: "20px",
                background: "#4c56c0",
              }}
            >
              <div>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-around"
                  direction="column"
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    background: "#4852b6",
                  }}
                >
                  <Grid zeroMinWidth item style={{ paddingTop: "25px" }}>
                    <Avatar
                      src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA0fHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "60px", height: "60px" }}
                    ></Avatar>
                  </Grid>
                  <Grid zeroMinWidth item style={{ paddingTop: "15px" }}>
                    <Typography
                      variant="h5"
                      style={{ color: "rgba(255,255,255,0.91)" }}
                    >
                      VARDHAN KUMAR
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                    <Typography
                      variant="body2"
                      style={{ color: "rgba(255,255,255,0.86)" }}
                    >
                      vardhan.vr90@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container>
                  <Grid item zeroMinWidth xs={12}>
                    <List>
                      <ListItem button>
                        <ListItemIcon>
                          <HomeOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="DASHBOARD"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                      <ListItem
                        button
                        style={{
                          marginLeft: "12px",
                          borderBottomLeftRadius: "20px",
                          borderTopLeftRadius: "20px",
                          background: "#f0f1f5",
                        }}
                      >
                        <ListItemIcon>
                          <FlightTakeoffOutlined
                            style={{
                              marginLeft: "-12px",
                              fontSize: "35px",
                              color: "#84ce95",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="FLIGHT"
                          style={{ color: "#4a4a4a", marginLeft: "-12px" }}
                        />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <AccountBalanceWalletOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="WALLET"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <LibraryBooksOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="REPORTS"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <BarChartOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="STATISTICS"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <SettingsOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="SETTINGS"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container>
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="body2"
                      style={{
                        color: "#84ce95",
                        paddingTop: "20px",
                        paddingLeft: "20px",
                      }}
                    >
                      ACTIVE USERS
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div
                style={{
                  borderRadius: "20px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                <Grid container>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      style={{
                        borderStyle: "solid",
                        marginLeft: "-10px",
                        borderColor: "#4852b6",
                      }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup style={{ marginLeft: "-10px" }}>
                    <Avatar
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjYxfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ borderStyle: "solid", borderColor: "#4852b6" }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQxfHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ marginLeft: "-10px", borderColor: "#4852b6" }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEyfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ marginLeft: "-10px", borderColor: "#4852b6" }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup>
                    <Avatar
                      style={{
                        marginLeft: "-10px",
                        background: "#84ce95",
                        borderColor: "#4852b6",
                      }}
                    >
                      +70
                    </Avatar>
                  </AvatarGroup>
                </Grid>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  marginTop: "50px",
                  display: "flex",
                }}
              >
                <img
                  src="https://www.thinkholsinger.com/wp-content/uploads/2015/07/World-2_980x400.jpg"
                  style={{
                    borderRadius: "15px",
                    width: "200px",
                    margin: "auto",
                    height: "120px",
                  }}
                ></img>
              </div>
            </Grid>
            <Grid
              zeroMinWidth
              item
              xl={9}
              md={9}
              sm
              xs
              lg={9}
              style={{ marginBottom: "30px" }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "20px",
                  margin: "20px",
                }}
              >
                <Grid container>
                  <Grid zeroMinWidth item lg={6} xl={6} md={12}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item lg={5} xl={5} md={5}>
                          <IconButton
                            size="small"
                            style={{
                              fontSize: "12px",
                              fontFamily: "arimo",
                              outline: "none",
                              fontWeight: "900",
                              paddingRight: "10px",
                            }}
                          >
                            <LocationOnOutlined
                              style={{
                                color: "#84ce95",
                                fontSize: "35px",
                                paddingRight: "5px",
                              }}
                            />
                            NEW YORK (JFK)
                          </IconButton>
                        </Grid>
                        <Grid zeroMinWidth item lg={2} xl={2} md={2}>
                          <IconButton
                            size="small"
                            style={{
                              outline: "none",
                              paddingLeft: "15px",
                              paddingRight: "15px",
                            }}
                          >
                            <CompareArrowsOutlined
                              style={{
                                borderRadius: "50px",
                                backgroundColor: "#84ce95",
                                width: "35px",
                                padding: "5px",
                                height: "35px",
                              }}
                            />
                          </IconButton>
                        </Grid>
                        <Grid zeroMinWidth item lg={5} xl={5} md={5}>
                          <IconButton
                            size="small"
                            style={{
                              fontSize: "12px",
                              fontFamily: "arimo",
                              outline: "none",
                              fontWeight: "900",
                              paddingRight: "10px",
                            }}
                          >
                            <LocationOnOutlined
                              style={{
                                color: "#84ce95",
                                fontSize: "35px",
                                paddingRight: "5px",
                              }}
                            />
                            BOMBAY (BOM)
                          </IconButton>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={3} xl={3} md={6}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <input
                        type="date"
                        style={{
                          border: "none",
                          padding: "4px 0px",
                          outline: "none",
                          color: "#757272",
                          background: "none",
                          width: "140px",
                          fontSize: "15px",
                          fontFamily: "arimo",
                        }}
                      ></input>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={3} xl={3} md={6}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "8px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        size="small"
                        style={{
                          fontSize: "12px",
                          fontFamily: "arimo",
                          outline: "none",
                          fontWeight: "900",
                        }}
                      >
                        <PermIdentityOutlined
                          style={{
                            color: "#84ce95",
                            fontSize: "30px",
                            marginRight: "5px",
                          }}
                        />
                        2 TRAVELLER
                      </IconButton>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={6} xl={6} md={12}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid
                          zeroMinWidth
                          item
                          lg={4}
                          xl={4}
                          md={4}
                          style={{ marginLeft: "-" }}
                        >
                          <Button
                            size="small"
                            style={{
                              borderRadius: "20px",
                              marginLeft: "-25px",
                              padding: "10px 40px",
                              outline: "none",
                              color: "rgba(255,255,255,0.9)",
                              background: "#84ce95",
                              fontWeight: "900",
                              fontSize: "12px",
                              fontFamily: "arimo",
                              textAlign: "left",
                            }}
                          >
                            ONE WAY
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item lg={4} xl={4} md={4}>
                          <Button
                            size="small"
                            style={{
                              fontSize: "12px",
                              padding: "10px",
                              fontFamily: "arimo",
                              outline: "none",
                              color: "rgba(74,74,74,0.88)",
                              fontWeight: "900",
                            }}
                          >
                            ROUND TRIP
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item lg={4} xl={4} md={4}>
                          <Button
                            size="small"
                            style={{
                              fontSize: "12px",
                              padding: "10px",
                              fontFamily: "arimo",
                              outline: "none",
                              color: "rgba(74,74,74,0.88)",
                              fontWeight: "900",
                            }}
                          >
                            MULTI CITY
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={3} xl={3} md={6}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        size="small"
                        style={{
                          fontSize: "12px",
                          fontFamily: "arimo",
                          outline: "none",
                          fontWeight: "900",
                        }}
                      >
                        <FilterFramesOutlined
                          style={{ color: "#84ce95", marginRight: "10px" }}
                        />
                        FIRST CLASS
                      </IconButton>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={3} xl={3} md={6}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        background: "#4852b6",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        style={{
                          color: "rgba(255,255,255,0.84)",
                          outline: "none",
                        }}
                      >
                        SEARCH
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ margin: "20px" }}>
                <Grid container>
                  <Grid
                    zeroMinWidth
                    item
                    lg={6}
                    xl={6}
                    md={5}
                    style={{ paddingLeft: "5px" }}
                  >
                    <div style={{ marginTop: "25px" }}>
                      <Typography
                        variant="h6"
                        align="left"
                        style={{ color: "rgba(0,0,0,0.68)" }}
                      >
                        RESULTS (25)
                      </Typography>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={2} xl={2} md={2}>
                    <div
                      style={{
                        borderRadius: "20px",
                        backgroundColor: "#ffffff",
                        padding: "5px  0px",
                        marginTop: "25px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          color: "rgba(74,74,74,0.62)",
                          fontSize: "14px",
                        }}
                      >
                        FILTER
                      </Typography>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={1} xl={1} md={1} />
                  <Grid zeroMinWidth item lg={3} xl={3} md={4}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "4px 0px",
                        marginTop: "25px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          color: "rgba(74,74,74,0.62)",
                          fontSize: "14px",
                        }}
                      >
                        TICKET OF CLASS
                        <IconButton style={{ padding: "0px" }}>
                          <KeyboardArrowDownOutlined />
                        </IconButton>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ margin: "20px", marginTop: "50px" }}>
                <Grid container>
                  <Grid zeroMinWidth item xl={8} md={12} sm={12} lg={8} xs={12}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <img
                              src="https://i.pinimg.com/originals/2e/e8/f0/2ee8f07cf98ec8ef0875a0d2e24f27e8.png"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              EMIRATES
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                1,752
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIkJxl09zpENBgoH4cEHRsOCaRQgvqKTUhtA&usqp=CAU"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              KUWAIT AIRWAYS
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                2,072
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYcTdc0B0ea3hbMyKAKLB41KP25cYI1BC9BA&usqp=CAU"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              LUFTHANSA
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                1,852
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <img
                              src="https://i.pinimg.com/originals/e9/d9/c6/e9d9c6384f5719a995b773b7a2bc5b37.png"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              BRITISH AIRWAYS
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                1.752
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={4} xs={12} xl={4} md={12}>
                    <div
                      style={{
                        backgroundColor: "#4c56c0",
                        borderRadius: "20px",
                        marginLeft: "10px",
                        padding: "20px",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.61)" }}
                            >
                              FROM
                            </Typography>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.87)" }}
                            >
                              JFK
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={6}>
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.55)" }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div style={{ textAlign: "right" }}>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.57)" }}
                            >
                              TO
                            </Typography>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.87)" }}
                            >
                              BOM
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="center"
                        direction="row"
                        style={{ marginTop: "30px" }}
                      >
                        <Grid zeroMinWidth item>
                          <div>
                            <img
                              src="https://www.fly4free.com/wp-content/uploads/2017/05/map-98.png"
                              className="img-fluid"
                              style={{ borderRadius: "20px", width: "100%" }}
                            ></img>
                          </div>
                        </Grid>
                      </Grid>
                      <div style={{ textAlign: "center" }}>
                        <Grid container style={{ marginTop: "30px" }}>
                          <Grid zeroMinWidth item md={4}>
                            <div style={{ textAlign: "left" }}>
                              <Typography
                                variant="body2"
                                align="left"
                                display="inline"
                                style={{
                                  color: "rgba(255,255,255,0.82)",
                                  fontSize: "12px",
                                  background: "#84ce95",
                                  padding: "5px 10px",
                                  borderRadius: "20px",
                                }}
                              >
                                NON STOP
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item md={4}>
                            <div style={{ padding: "5px" }}>
                              <Typography
                                variant="body2"
                                align="center"
                                style={{
                                  color: "rgba(255,255,255,0.82)",
                                  fontSize: "12px",
                                }}
                              >
                                ONE STOP
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item md={4}>
                            <div style={{ padding: "5px" }}>
                              <Typography
                                variant="body2"
                                align="right"
                                style={{
                                  color: "rgba(255,255,255,0.82)",
                                  fontSize: "12px",
                                }}
                              >
                                MORE STOP
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "30px" }}>
                          <Grid zeroMinWidth item md={12}>
                            <div style={{ textAlign: "left" }}>
                              <Typography
                                variant="body2"
                                style={{
                                  color: "rgba(255,255,255,0.81)",
                                  fontSize: "12px",
                                }}
                              >
                                PRICE
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid zeroMinWidth item md={12}>
                            <div
                              style={{
                                backgroundColor: "rgba(155,155,155,0.56)",
                                marginTop: "25px",
                                height: "2px",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "8px",
                                  marginLeft: "40px",
                                  width: "16px",
                                  marginTop: "-5px",
                                  float: "left",
                                  height: "16px",
                                }}
                              ></div>
                              <div
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "8px",
                                  paddingLeft: "-300px",
                                  width: "16px",
                                  marginTop: "-5px",
                                  float: "right",
                                  height: "16px",
                                  marginRight: "40px",
                                }}
                              ></div>
                            </div>
                            <div
                              style={{
                                color: "#ffffff",
                                fontSize: "15px",
                                marginTop: "20px",
                              }}
                            >
                              <span
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "20px",
                                  marginLeft: "15px",
                                  padding: "5px 20px",
                                  float: "left",
                                }}
                              >
                                $500
                              </span>
                              <span
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "20px",
                                  padding: "5px 20px",
                                  float: "right",
                                  marginRight: "15px",
                                }}
                              >
                                $700
                              </span>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Hidden smDown mdDown implementation="css">
        <Container
          maxWidth="xl"
          style={{
            backgroundColor: "rgba(155,155,155,0.9)",
            borderRadius: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Grid
            container
            alignContent="flex-start"
            alignItems="flex-start"
            justify="space-around"
            direction="row"
            style={{ borderRadius: "20px", backgroundColor: "#f0f1f5" }}
          >
            <Grid
              zeroMinWidth
              item
              xl={3}
              md={3}
              sm={12}
              xs={12}
              lg={3}
              style={{
                borderRadius: "20px",
                paddingBottom: "20px",
                background: "#4c56c0",
              }}
            >
              <div>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-around"
                  direction="column"
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    background: "#4852b6",
                  }}
                >
                  <Grid zeroMinWidth item style={{ paddingTop: "25px" }}>
                    <Avatar
                      src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA0fHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "60px", height: "60px" }}
                    ></Avatar>
                  </Grid>
                  <Grid zeroMinWidth item style={{ paddingTop: "15px" }}>
                    <Typography
                      variant="h5"
                      style={{ color: "rgba(255,255,255,0.91)" }}
                    >
                      VARDHAN KUMAR
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                    <Typography
                      variant="body2"
                      style={{ color: "rgba(255,255,255,0.86)" }}
                    >
                      vardhan.vr90@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container>
                  <Grid item zeroMinWidth xs={12}>
                    <List>
                      <ListItem button>
                        <ListItemIcon>
                          <HomeOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="DASHBOARD"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                      <ListItem
                        button
                        style={{
                          marginLeft: "12px",
                          borderBottomLeftRadius: "20px",
                          borderTopLeftRadius: "20px",
                          background: "#f0f1f5",
                        }}
                      >
                        <ListItemIcon>
                          <FlightTakeoffOutlined
                            style={{
                              marginLeft: "-12px",
                              fontSize: "35px",
                              color: "#84ce95",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="FLIGHT"
                          style={{ color: "#4a4a4a", marginLeft: "-12px" }}
                        />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <AccountBalanceWalletOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="WALLET"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <LibraryBooksOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="REPORTS"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <BarChartOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="STATISTICS"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <SettingsOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "35px",
                              paddingLeft: "10px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="SETTINGS"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container>
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="body2"
                      style={{
                        color: "#84ce95",
                        paddingTop: "20px",
                        paddingLeft: "20px",
                      }}
                    >
                      ACTIVE USERS
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div
                style={{
                  borderRadius: "20px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                <Grid container>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      style={{
                        borderStyle: "solid",
                        marginLeft: "-10px",
                        borderColor: "#4852b6",
                      }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup style={{ marginLeft: "-10px" }}>
                    <Avatar
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjYxfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ borderStyle: "solid", borderColor: "#4852b6" }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQxfHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ marginLeft: "-10px", borderColor: "#4852b6" }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup>
                    <Avatar
                      src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEyfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ marginLeft: "-10px", borderColor: "#4852b6" }}
                    ></Avatar>
                  </AvatarGroup>
                  <AvatarGroup>
                    <Avatar
                      style={{
                        marginLeft: "-10px",
                        background: "#84ce95",
                        borderColor: "#4852b6",
                      }}
                    >
                      +70
                    </Avatar>
                  </AvatarGroup>
                </Grid>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  marginTop: "50px",
                  display: "flex",
                }}
              >
                <img
                  src="https://www.thinkholsinger.com/wp-content/uploads/2015/07/World-2_980x400.jpg"
                  style={{
                    borderRadius: "15px",
                    width: "200px",
                    margin: "auto",
                    height: "120px",
                  }}
                ></img>
              </div>
            </Grid>
            <Grid
              zeroMinWidth
              item
              xl={9}
              md={9}
              sm
              xs
              lg={9}
              style={{ marginBottom: "30px" }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "20px",
                  margin: "20px",
                }}
              >
                <Grid container>
                  <Grid zeroMinWidth item lg={6} xl={6} md={12}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item lg={5} xl={5} md={5}>
                          <IconButton
                            size="small"
                            style={{
                              fontSize: "12px",
                              fontFamily: "arimo",
                              outline: "none",
                              fontWeight: "900",
                              paddingRight: "10px",
                            }}
                          >
                            <LocationOnOutlined
                              style={{
                                color: "#84ce95",
                                fontSize: "35px",
                                paddingRight: "5px",
                              }}
                            />
                            NEW YORK (JFK)
                          </IconButton>
                        </Grid>
                        <Grid zeroMinWidth item lg={2} xl={2} md={2}>
                          <IconButton
                            size="small"
                            style={{
                              outline: "none",
                              paddingLeft: "15px",
                              paddingRight: "15px",
                            }}
                          >
                            <CompareArrowsOutlined
                              style={{
                                borderRadius: "50px",
                                backgroundColor: "#84ce95",
                                width: "35px",
                                padding: "5px",
                                height: "35px",
                              }}
                            />
                          </IconButton>
                        </Grid>
                        <Grid zeroMinWidth item lg={5} xl={5} md={5}>
                          <IconButton
                            size="small"
                            style={{
                              fontSize: "12px",
                              fontFamily: "arimo",
                              outline: "none",
                              fontWeight: "900",
                              paddingRight: "10px",
                            }}
                          >
                            <LocationOnOutlined
                              style={{
                                color: "#84ce95",
                                fontSize: "35px",
                                paddingRight: "5px",
                              }}
                            />
                            BOMBAY (BOM)
                          </IconButton>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={3} xl={3} md={6}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <input
                        type="date"
                        style={{
                          border: "none",
                          padding: "4px 0px",
                          outline: "none",
                          color: "#757272",
                          background: "none",
                          width: "140px",
                          fontSize: "15px",
                          fontFamily: "arimo",
                        }}
                      ></input>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={3} xl={3} md={6}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "8px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        size="small"
                        style={{
                          fontSize: "12px",
                          fontFamily: "arimo",
                          outline: "none",
                          fontWeight: "900",
                        }}
                      >
                        <PermIdentityOutlined
                          style={{
                            color: "#84ce95",
                            fontSize: "30px",
                            marginRight: "5px",
                          }}
                        />
                        2 TRAVELLER
                      </IconButton>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={6} xl={6} md={12}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item lg={4} xl={4} md={4}>
                          <Button
                            size="small"
                            style={{
                              borderRadius: "20px",
                              marginLeft: "-5px",
                              padding: "10px 30px",
                              outline: "none",
                              color: "rgba(255,255,255,0.9)",
                              background: "#84ce95",
                              fontWeight: "900",
                              fontSize: "12px",
                              fontFamily: "arimo",
                              textAlign: "left",
                            }}
                          >
                            ONE WAY
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item lg={4} xl={4} md={4}>
                          <Button
                            size="small"
                            style={{
                              fontSize: "12px",
                              padding: "10px",
                              fontFamily: "arimo",
                              outline: "none",
                              color: "rgba(74,74,74,0.88)",
                              fontWeight: "900",
                            }}
                          >
                            ROUND TRIP
                          </Button>
                        </Grid>
                        <Grid zeroMinWidth item lg={4} xl={4} md={4}>
                          <Button
                            size="small"
                            style={{
                              fontSize: "12px",
                              padding: "10px",
                              fontFamily: "arimo",
                              outline: "none",
                              color: "rgba(74,74,74,0.88)",
                              fontWeight: "900",
                            }}
                          >
                            MULTI CITY
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={3} xl={3} md={6}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        size="small"
                        style={{
                          fontSize: "12px",
                          fontFamily: "arimo",
                          outline: "none",
                          fontWeight: "900",
                        }}
                      >
                        <FilterFramesOutlined
                          style={{ color: "#84ce95", marginRight: "10px" }}
                        />
                        FIRST CLASS
                      </IconButton>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={3} xl={3} md={6}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        background: "#4852b6",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        style={{
                          color: "rgba(255,255,255,0.84)",
                          outline: "none",
                        }}
                      >
                        SEARCH
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ margin: "20px" }}>
                <Grid container>
                  <Grid
                    zeroMinWidth
                    item
                    lg={6}
                    xl={6}
                    md={5}
                    style={{ paddingLeft: "5px" }}
                  >
                    <div style={{ marginTop: "25px" }}>
                      <Typography
                        variant="h6"
                        align="left"
                        style={{ color: "rgba(0,0,0,0.68)" }}
                      >
                        RESULTS (25)
                      </Typography>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={2} xl={2} md={2}>
                    <div
                      style={{
                        borderRadius: "20px",
                        backgroundColor: "#ffffff",
                        padding: "5px  0px",
                        marginTop: "25px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          color: "rgba(74,74,74,0.62)",
                          fontSize: "14px",
                        }}
                      >
                        FILTER
                      </Typography>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item lg={1} xl={1} md={1} />
                  <Grid zeroMinWidth item lg={3} xl={3} md={4}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "4px 0px",
                        marginTop: "25px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          color: "rgba(74,74,74,0.62)",
                          fontSize: "14px",
                        }}
                      >
                        TICKET OF CLASS
                        <IconButton style={{ padding: "0px" }}>
                          <KeyboardArrowDownOutlined />
                        </IconButton>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ margin: "20px", marginTop: "50px" }}>
                <Grid container>
                  <Grid zeroMinWidth item xl={8} md={12} sm={12} lg={8} xs={12}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <img
                              src="https://i.pinimg.com/originals/2e/e8/f0/2ee8f07cf98ec8ef0875a0d2e24f27e8.png"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              EMIRATES
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                1,752
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIkJxl09zpENBgoH4cEHRsOCaRQgvqKTUhtA&usqp=CAU"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              KUWAIT AIRWAYS
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                2,072
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYcTdc0B0ea3hbMyKAKLB41KP25cYI1BC9BA&usqp=CAU"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              LUFTHANSA
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                1,852
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <img
                              src="https://i.pinimg.com/originals/e9/d9/c6/e9d9c6384f5719a995b773b7a2bc5b37.png"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              JFK
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              13:00
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "#4a4a4a", fontSize: "10px" }}
                            >
                              BRITISH AIRWAYS
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "#84ce95", fontSize: "13px" }}
                            >
                              11H:20M
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "rgba(0,0,0,0.42)",
                                fontSize: "15px",
                              }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={2}>
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.67)" }}
                            >
                              BOM
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: "rgba(0,0,0,0.42)" }}
                            >
                              14:20
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.67)",
                                paddingLeft: "20px",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "15px" }}
                              ></i>
                              <span
                                style={{ fontSize: "15px", fontWeight: "700" }}
                              >
                                1.752
                              </span>
                            </div>
                            <Button
                              style={{
                                borderRadius: "20px",
                                padding: "5px 10px",
                                outline: "none",
                                color: "#ffffff",
                                background: "#84ce95",
                                fontWeight: "900",
                                fontSize: "12px",
                                fontFamily: "arimo",
                                marginTop: "10px",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item xl={4} md={12} sm={12} lg={4} xs={12}>
                    <div
                      style={{
                        backgroundColor: "#4c56c0",
                        borderRadius: "20px",
                        marginLeft: "10px",
                        padding: "20px",
                      }}
                    >
                      <Grid container>
                        <Grid zeroMinWidth item md={3}>
                          <div>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.61)" }}
                            >
                              FROM
                            </Typography>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.87)" }}
                            >
                              JFK
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={6}>
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.55)" }}
                            >
                              NON-STOP
                            </Typography>
                          </div>
                        </Grid>
                        <Grid zeroMinWidth item md={3}>
                          <div style={{ textAlign: "right" }}>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.57)" }}
                            >
                              TO
                            </Typography>
                            <Typography
                              variant="body2"
                              style={{ color: "rgba(255,255,255,0.87)" }}
                            >
                              BOM
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid container style={{ marginTop: "30px" }}>
                        <Grid zeroMinWidth item>
                          <div>
                            <img
                              src="https://www.fly4free.com/wp-content/uploads/2017/05/map-98.png"
                              className="img-fluid"
                              style={{ borderRadius: "20px", width: "100%" }}
                            ></img>
                          </div>
                        </Grid>
                      </Grid>
                      <div style={{ textAlign: "center" }}>
                        <Grid container style={{ marginTop: "30px" }}>
                          <Grid zeroMinWidth item md={4}>
                            <div style={{ textAlign: "left" }}>
                              <Typography
                                variant="body2"
                                align="left"
                                display="inline"
                                style={{
                                  color: "rgba(255,255,255,0.82)",
                                  fontSize: "12px",
                                  background: "#84ce95",
                                  padding: "5px 10px",
                                  borderRadius: "20px",
                                }}
                              >
                                NON STOP
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item md={4}>
                            <div style={{ padding: "5px" }}>
                              <Typography
                                variant="body2"
                                style={{
                                  color: "rgba(255,255,255,0.82)",
                                  fontSize: "12px",
                                }}
                              >
                                ONE STOP
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item md={4}>
                            <div style={{ padding: "5px" }}>
                              <Typography
                                variant="body2"
                                style={{
                                  color: "rgba(255,255,255,0.82)",
                                  fontSize: "12px",
                                }}
                              >
                                MORE STOP
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "30px" }}>
                          <Grid zeroMinWidth item md={12}>
                            <div style={{ textAlign: "left" }}>
                              <Typography
                                variant="body2"
                                style={{
                                  color: "rgba(255,255,255,0.81)",
                                  fontSize: "12px",
                                }}
                              >
                                PRICE
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid zeroMinWidth item md={12}>
                            <div
                              style={{
                                backgroundColor: "rgba(155,155,155,0.56)",
                                marginTop: "25px",
                                height: "2px",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "8px",
                                  marginLeft: "40px",
                                  width: "16px",
                                  marginTop: "-5px",
                                  float: "left",
                                  height: "16px",
                                }}
                              ></div>
                              <div
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "8px",
                                  paddingLeft: "-300px",
                                  width: "16px",
                                  marginTop: "-5px",
                                  float: "right",
                                  height: "16px",
                                  marginRight: "40px",
                                }}
                              ></div>
                            </div>
                            <div
                              style={{
                                color: "#ffffff",
                                fontSize: "15px",
                                marginTop: "20px",
                              }}
                            >
                              <span
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "20px",
                                  marginLeft: "15px",
                                  padding: "5px 20px",
                                  float: "left",
                                }}
                              >
                                $500
                              </span>
                              <span
                                style={{
                                  backgroundColor: "#84ce95",
                                  borderRadius: "20px",
                                  padding: "5px 20px",
                                  float: "right",
                                  marginRight: "15px",
                                }}
                              >
                                $700
                              </span>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
    </div>
  );
}
export default SlashflightMatUI;