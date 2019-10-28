#!/bin/bash

function insert {
  DATA=$1
  curl -H Content-Type:application/json -X POST 'http://localhost:8000/rollingStock' -d "$DATA"
  echo ""
}

insert '{
  "type": "emu",
  "class": "345",
  "unitNumber": "3450001",
  "manufacturer": "Bombardier"
}'

insert '{
  "type": "emu",
  "class": "345",
  "unitNumber": "3450002",
  "manufacturer": "Bombardier"
}'
