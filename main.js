const businesses = [
  {
    purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
    phoneWork: "089.129.2290 x9400",
    orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
    companyName: "Care-media",
    companyIndustry: "Education",
    addressZipCode: "56839",
    addressStateCode: "WI",
    addressFullStreet: "8417 Franklin Court Tunnel",
    addressCity: "Mouthcard",
  },
  {
    purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
    phoneWork: "(833) 222-7579 x5874",
    orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
    companyName: "Stanholding",
    companyIndustry: "Hospitality",
    addressZipCode: "09705",
    addressStateCode: "NY",
    addressFullStreet: "2889 Fawn Court Garden",
    addressCity: "Fellsmere",
  },
  {
    purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
    phoneWork: "235.266.6278",
    orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
    companyName: "Highnix",
    companyIndustry: "Agriculture",
    addressZipCode: "49376",
    addressStateCode: "ME",
    addressFullStreet: "5734 Maple Avenue Throughway",
    addressCity: "Little Genesee",
  },
  {
    purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
    phoneWork: "1-449-987-3083 x23263",
    orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
    companyName: "Conit",
    companyIndustry: "Defense",
    addressZipCode: "53326",
    addressStateCode: "IL",
    addressFullStreet: "5755 Hillside Drive Crossroad",
    addressCity: "Norval",
  },
  {
    purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
    phoneWork: "1-730-411-8580",
    orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
    companyName: "Dong-tom",
    companyIndustry: "Energy",
    addressZipCode: "67071",
    addressStateCode: "KS",
    addressFullStreet: "4826 Arch Street Lights",
    addressCity: "Newburyport",
  },
  {
    purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
    phoneWork: "(868) 043-0950",
    orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
    companyName: "Dan-dox",
    companyIndustry: "Manufacturing",
    addressZipCode: "98842",
    addressStateCode: "WV",
    addressFullStreet: "9767 Cedar Court Corner",
    addressCity: "Prince George",
  },
  {
    purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
    phoneWork: "(298) 305-1942 x53653",
    orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
    companyName: "J-base",
    companyIndustry: "Health care",
    addressZipCode: "72993",
    addressStateCode: "FL",
    addressFullStreet: "9954 Buckingham Drive Mountains",
    addressCity: "Vesper",
  },
  {
    purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
    phoneWork: "(743) 934-8981 x692",
    orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
    companyName: "Span-fix",
    companyIndustry: "Construction",
    addressZipCode: "59860",
    addressStateCode: "MT",
    addressFullStreet: "4151 Orange Street Extension",
    addressCity: "Little Rock Air Force Base",
  },
  {
    purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
    phoneWork: "727.635.6610 x6483",
    orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
    companyName: "Sanaplane",
    companyIndustry: "Information",
    addressZipCode: "85156",
    addressStateCode: "NY",
    addressFullStreet: "4765 Fairview Avenue Locks",
    addressCity: "Dennisville",
  },
  {
    purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
    phoneWork: "(992) 079-1670 x71569",
    orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
    companyName: "Ran-taxon",
    companyIndustry: "Manufacturing",
    addressZipCode: "96673",
    addressStateCode: "MD",
    addressFullStreet: "7157 Hudson Street Ford",
    addressCity: "Watrous",
  },
];

//forEach method + lightning exercise
const outEl = document.querySelector("#output");
outEl.innerHTML = "<h1>Active Businesses</h1>";

businesses.forEach((business) => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
    ${business.addressFullStreet}
    </section>
    <section>
    ${business.addressCity}, ${business["addressStateCode"]}, ${business["addressZipCode"]}
    </section>
  `;
  outEl.innerHTML += "<hr/>";
});

//filter method
const newYorkBusinesses = businesses.filter((business) => {
  let inNewYork = false;

  if (business.addressStateCode === "NY") {
    inNewYork = true;
  }

  return inNewYork;
});

outEl.innerHTML += "<h1>Manufacturing Businesses</h1>";

//filter lightning exercise
const manufacturingBusinesses = businesses.filter((businesses) => {
  let manufacturingBiz = false;

  if (businesses.companyIndustry === "Manufacturing") {
    manufacturingBiz = true;
  }

  return manufacturingBiz;
});

manufacturingBusinesses.forEach((business) => {
  outEl.innerHTML += `<h2>${business.companyName}</h2>`;
  outEl.innerHTML += "<hr/>";
});


//map exercise
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

const agents = businesses.map((business) => {
  return business.purchasingAgent;
});

console.table(agents);

agents.forEach((agent) => {
  outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
  outEl.innerHTML += "<hr/>";
});

//map lightning exercise
const agentObj = businesses.map(business => (
  {'fullName': business.purchasingAgent, 'company': business.companyName, 'phoneNumber': business.phoneWork}
  ));

console.table(agentObj);

//this doesn't work yet - got .map to make a new obj but can't get it to render to dom correctly below
// agentObj.forEach((newObj) => {
//   outEl.innerHTML += `<h2>${newObj.purchasingAgent}</h2>
//   <section>
//   ${newObj.companyName}
//   </section>
//   <section>
//   ${newObj.phoneWork}
//   </section>`;
//   outEl.innerHTML += "<hr/>";
// });

//find exercise - also not working - come back to this
document
  .querySelector('#companySearch')
  .addEventListener('keypress', keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
      const foundBusiness = businesses.find(business => business.companyName.includes(keyPressEvent.target.value)
      );
      
    outEl.innerHTML = `
        <h2>
        ${foundBusiness.companyName}
        </h2>
        <section>
        ${foundBusiness.addressFullStreet}
        </section>
        <section>
        ${foundBusiness.addressCity},
        ${foundBusiness.addressStateCode}
        ${foundBusiness.addressZipCode}
        </section>
      `;
    }
});

//reduce lightning exercises
//#1
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((currentTotal, nextValue) => currentTotal += nextValue, 0
)

console.log(totalRainfall)

//#2
const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce(
  (currentWord, nextWord) => currentWord += nextWord, ""
)

console.log(sentence)

//Practice: Big Spenders
const bigSpenders = businesses.filter(business => {
  let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
)
  if (totalOrders > 9000) {
    return business.companyName
  }; 
  
});

console.log(bigSpenders);
