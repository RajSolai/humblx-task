export function transformData(data) {
  const output = [];

  for (const item of data) {
    const parameters = item.parameters.filter((param) => param.statusOk);
    const okayCount = parameters.length;

    const transformedItem = {
      name: item.facility.name,
      okayCount: okayCount,
    };

    output.push(transformedItem);
  }

  return output;
}

export const data = [
  {
    overall: {
      description: null,
      media: [
        {
          _id: {
            $oid: "64279281fed2ad00023819aa",
          },
          name: "089a478c-f801-459a-8476-f69beded4a59.png",
          path: "https://images.unsplash.com/photo-1684569546963-792efe6b2a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
        {
          _id: {
            $oid: "64279281fed2ad00023819ab",
          },
          name: "406960f6-e59b-4e96-9ebf-f42e6113624d.png",
          path: "https://images.unsplash.com/photo-1684752849045-810967ad990f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
        {
          _id: {
            $oid: "64279281fed2ad00023819ac",
          },
          name: "93786cb4-ddb7-4a71-ac80-0d580921f450.png",
          path: "https://images.unsplash.com/photo-1684662863663-d25e39fc4c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
      ],
    },
    open: false,
    parameters: [
      {
        name: "Floor",
        statusOk: false,
      },
      {
        name: "Windows",
        statusOk: false,
      },
      {
        name: "Walls",
        statusOk: false,
      },
      {
        name: "Beds",
        statusOk: false,
      },
      {
        name: "Trash bins",
        statusOk: false,
      },
      {
        name: "Toilets",
        statusOk: false,
      },
      {
        name: "Sinks",
        statusOk: true,
      },
      {
        name: "Handrails",
        statusOk: false,
      },
      {
        name: "Light fixtures",
        statusOk: false,
      },
      {
        name: "Curtains",
        statusOk: false,
      },
    ],
    dateSubmitted: {
      $date: "2023-04-01T02:10:09.270Z",
    },
    facility: {
      $oid: "61de6de9fe8a082475b93be2",
      name: "Room 2",
    },
    submittedBy: {
      firstName: "John",
      lastName: "Doe",
      position: "Hospital Housekeeping Staff",
      employeeID: "HKS54321",
    },
    organization: {
      name: "ABC Hospital",
      address: "123 Main Street, Cityville, Country",
      contact: "+1 123-456-7890",
      logo: "https://a.fsdn.com/allura/s/logo-com/icon?e31cc148d3675e249dd75f68acda1a079dbbe2dbcee3e5dbba4be1717db3a0c4?&w=148",
    },
    dateStarted: {
      $date: "2023-04-01T02:10:09.272Z",
    },
    createdAt: {
      $date: "2023-04-01T02:10:09.469Z",
    },
    updatedAt: {
      $date: "2023-04-01T02:10:09.469Z",
    },
    id: 53863,
    __v: 0,
  },
  {
    overall: {
      description: null,
      media: [
        {
          _id: {
            $oid: "64279281fed2ad00023819aa",
          },
          name: "089a478c-f801-459a-8476-f69beded4a59.png",
          path: "https://images.unsplash.com/photo-1684569546963-792efe6b2a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
        {
          _id: {
            $oid: "64279281fed2ad00023819ab",
          },
          name: "406960f6-e59b-4e96-9ebf-f42e6113624d.png",
          path: "https://images.unsplash.com/photo-1684752849045-810967ad990f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
        {
          _id: {
            $oid: "64279281fed2ad00023819ac",
          },
          name: "93786cb4-ddb7-4a71-ac80-0d580921f450.png",
          path: "https://images.unsplash.com/photo-1684662863663-d25e39fc4c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
      ],
    },
    open: false,
    parameters: [
      {
        name: "Floor",
        statusOk: true,
      },
      {
        name: "Windows",
        statusOk: false,
      },
      {
        name: "Walls",
        statusOk: true,
      },
      {
        name: "Beds",
        statusOk: false,
      },
      {
        name: "Trash bins",
        statusOk: true,
      },
      {
        name: "Toilets",
        statusOk: false,
      },
      {
        name: "Sinks",
        statusOk: true,
      },
      {
        name: "Handrails",
        statusOk: false,
      },
      {
        name: "Light fixtures",
        statusOk: true,
      },
      {
        name: "Curtains",
        statusOk: false,
      },
    ],
    dateSubmitted: {
      $date: "2023-04-01T02:10:09.270Z",
    },
    facility: {
      $oid: "61de6de9fe8a082475b93be2",
      name: "Room 3",
    },
    submittedBy: {
      firstName: "Emily",
      lastName: "Smith",
      position: "Hospital Housekeeping Staff",
      employeeID: "HKS98765",
    },
    organization: {
      name: "ABC Hospital",
      address: "123 Main Street, Cityville, Country",
      contact: "+1 123-456-7890",
      logo: "https://a.fsdn.com/allura/s/logo-com/icon?e31cc148d3675e249dd75f68acda1a079dbbe2dbcee3e5dbba4be1717db3a0c4?&w=148",
    },
    dateStarted: {
      $date: "2023-04-01T02:10:09.272Z",
    },
    createdAt: {
      $date: "2023-04-01T02:10:09.469Z",
    },
    updatedAt: {
      $date: "2023-04-01T02:10:09.469Z",
    },
    id: 53864,
    __v: 0,
  },
  {
    overall: {
      description: null,
      media: [
        {
          _id: {
            $oid: "64279281fed2ad00023819aa",
          },
          name: "089a478c-f801-459a-8476-f69beded4a59.png",
          path: "https://images.unsplash.com/photo-1684569546963-792efe6b2a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
        {
          _id: {
            $oid: "64279281fed2ad00023819ab",
          },
          name: "406960f6-e59b-4e96-9ebf-f42e6113624d.png",
          path: "https://images.unsplash.com/photo-1684752849045-810967ad990f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
        {
          _id: {
            $oid: "64279281fed2ad00023819ac",
          },
          name: "93786cb4-ddb7-4a71-ac80-0d580921f450.png",
          path: "https://images.unsplash.com/photo-1684662863663-d25e39fc4c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
      ],
    },
    open: false,
    parameters: [
      {
        name: "Floor",
        statusOk: false,
      },
      {
        name: "Windows",
        statusOk: true,
      },
      {
        name: "Walls",
        statusOk: false,
      },
      {
        name: "Beds",
        statusOk: true,
      },
      {
        name: "Trash bins",
        statusOk: false,
      },
      {
        name: "Toilets",
        statusOk: true,
      },
      {
        name: "Sinks",
        statusOk: false,
      },
      {
        name: "Handrails",
        statusOk: true,
      },
      {
        name: "Light fixtures",
        statusOk: false,
      },
      {
        name: "Curtains",
        statusOk: true,
      },
    ],
    dateSubmitted: {
      $date: "2023-04-01T02:10:09.270Z",
    },
    facility: {
      $oid: "61de6de9fe8a082475b93be2",
      name: "Room 5",
    },
    submittedBy: {
      firstName: "Sarah",
      lastName: "Johnson",
      position: "Hospital Housekeeping Staff",
      employeeID: "HKS24680",
    },
    organization: {
      name: "ABC Hospital",
      address: "123 Main Street, Cityville, Country",
      contact: "+1 123-456-7890",
      logo: "https://a.fsdn.com/allura/s/logo-com/icon?e31cc148d3675e249dd75f68acda1a079dbbe2dbcee3e5dbba4be1717db3a0c4?&w=148",
    },
    dateStarted: {
      $date: "2023-04-01T02:10:09.272Z",
    },
    createdAt: {
      $date: "2023-04-01T02:10:09.469Z",
    },
    updatedAt: {
      $date: "2023-04-01T02:10:09.469Z",
    },
    id: 53866,
    __v: 0,
  },
  {
    overall: {
      description: null,
      media: [
        {
          _id: {
            $oid: "64279281fed2ad00023819aa",
          },
          name: "089a478c-f801-459a-8476-f69beded4a59.png",
          path: "https://images.unsplash.com/photo-1684569546963-792efe6b2a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
        {
          _id: {
            $oid: "64279281fed2ad00023819ab",
          },
          name: "406960f6-e59b-4e96-9ebf-f42e6113624d.png",
          path: "https://images.unsplash.com/photo-1684752849045-810967ad990f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
        {
          _id: {
            $oid: "64279281fed2ad00023819ac",
          },
          name: "93786cb4-ddb7-4a71-ac80-0d580921f450.png",
          path: "https://images.unsplash.com/photo-1684662863663-d25e39fc4c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          type: "image/jpeg",
        },
      ],
    },
    open: false,
    parameters: [
      {
        name: "Floor",
        statusOk: true,
      },
      {
        name: "Windows",
        statusOk: false,
      },
      {
        name: "Walls",
        statusOk: true,
      },
      {
        name: "Beds",
        statusOk: false,
      },
      {
        name: "Trash bins",
        statusOk: true,
      },
      {
        name: "Toilets",
        statusOk: false,
      },
      {
        name: "Sinks",
        statusOk: true,
      },
      {
        name: "Handrails",
        statusOk: false,
      },
      {
        name: "Light fixtures",
        statusOk: true,
      },
      {
        name: "Curtains",
        statusOk: false,
      },
    ],
    dateSubmitted: {
      $date: "2023-04-01T02:10:09.270Z",
    },
    facility: {
      $oid: "61de6de9fe8a082475b93be2",
      name: "Room 1",
    },
    submittedBy: {
      firstName: "Manoj",
      lastName: "K",
      position: "Hospital Housekeeping Staff",
      employeeID: "HKS12345",
    },
    organization: {
      name: "ABC Hospital",
      address: "123 Main Street, Cityville, Country",
      contact: "+1 123-456-7890",
      logo: "https://a.fsdn.com/allura/s/logo-com/icon?e31cc148d3675e249dd75f68acda1a079dbbe2dbcee3e5dbba4be1717db3a0c4?&w=148",
    },
    dateStarted: {
      $date: "2023-04-01T02:10:09.272Z",
    },
    createdAt: {
      $date: "2023-04-03T02:10:09.469Z",
    },
    updatedAt: {
      $date: "2023-04-01T02:10:09.469Z",
    },
    id: 53861,
    __v: 0,
  },
];
