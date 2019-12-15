#!/bin/bash

function insert {
  curl -H Content-Type:application/json -X POST 'http://localhost:8000/rollingStock' -d "$1" && echo ""
}

insert '{
  "type": "emu",
  "class": "345",
  "unitNumber": "345014",
  "manufacturer": "Bombardier",
  "operator": "TfL Rail"
}'
insert '{
  "type": "passenger",
  "class": "340",
  "unitNumber": "340814",
  "manufacturer": "Bombardier",
  "operator": "TfL Rail"
}'
insert '{
  "type": "passenger",
  "class": "340",
  "unitNumber": "340714",
  "manufacturer": "Bombardier",
  "operator": "TfL Rail"
}'
insert '{
  "type": "passenger",
  "class": "340",
  "unitNumber": "340514",
  "manufacturer": "Bombardier",
  "operator": "TfL Rail"
}'
insert '{
  "type": "passenger",
  "class": "340",
  "unitNumber": "340414",
  "manufacturer": "Bombardier",
  "operator": "TfL Rail"
}'
insert '{
  "type": "passenger",
  "class": "340",
  "unitNumber": "340314",
  "manufacturer": "Bombardier",
  "operator": "TfL Rail"
}'
insert '{
  "type": "passenger",
  "class": "340",
  "unitNumber": "340114",
  "manufacturer": "Bombardier",
  "operator": "TfL Rail"
}'

insert '{
  "type": "emu",
  "class": "321",
  "unitNumber": "321358",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "emu",
  "class": "358",
  "unitNumber": "63116",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "passenger",
  "class": "63",
  "unitNumber": "63116",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "passenger",
  "class": "72",
  "unitNumber": "72002",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "passenger",
  "class": "78",
  "unitNumber": "78291",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "electric",
  "class": "90",
  "unitNumber": "90012",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "electric",
  "class": "90",
  "unitNumber": "90002",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "passenger",
  "class": "C3",
  "unitNumber": "11904",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "passenger",
  "class": "C3",
  "unitNumber": "11093",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "passenger",
  "class": "C3",
  "unitNumber": "10401",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "emu",
  "class": "321",
  "unitNumber": "321437",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "emu",
  "class": "315",
  "unitNumber": "315838",
  "manufacturer": "BREL",
  "operator": "TfL Rail"
}'

insert '{
  "type": "emu",
  "class": "360",
  "unitNumber": "360115",
  "manufacturer": "BREL",
  "operator": "Greater Anglia"
}'

insert '{
  "type": "diesel",
  "class": "66",
  "unitNumber": "66703",
  "manufacturer": "GB Railfreight"
}'
