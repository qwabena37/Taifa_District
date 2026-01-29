import { CongregationCard } from "../components/CongregationCard";

const sampleCongregations = [
  { id: 1, name: "Grace Congregation", location: "North Taifa", Minister: "Rev. Kwabena Yeboah Mintah", Catechist: "Cat. Mrs. Esther Agyekum", ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 2, name: "Love Congregation", location: "Oko",  Minister: "Rev. Ebenezer Asare Kisi", Catechist: "Cat. Bernice Djan" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539'  },
  { id: 3, name: "Trinity Congregation", location: "East Taifa",  Minister: "Rev. Fredrick Asirifi Asiedu", Catechist: "Cat. George Amponsah", ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 4, name: "Vision Congregation", location: "Point One",  Minister: "Rev. Kwabena Yeboah Mintah", Catechist: "Cat. Mrs. Ebenezer Owusu Antwi" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 5, name: "Salem Congregation", location: "Mr. Adjei",  Minister: "Rev. Clifford Robbert Amane-Sarpong", Catechist: "Cat. Sampson Adomako" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 6, name: "King David Preaching Point", location: "East Taifa",  Minister: "Rev. Kwabena Yeboah Mintah", Catechist: "Cat. Samuel Ago Lamptey" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 7, name: "Unity Congregation", location: "Dome",  Minister: "Rev. Nii Anang Blebo", Catechist: "Cat. Peterson Ahwireng" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 8, name: "Living Streams Congregation", location: "Kwabenya",  Minister: "Rev. Kwabena Yeboah Mintah", Catechist: "Cat. Dora Asomani Owusu" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 9, name: "El-Shammah Congregation", location: "Ofankor",  Minister: "Rev. Benjamin Kwadwo Aboagye", Catechist: "Cat. Justice Gyampoh" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 10, name: "Rock Congregation", location: "Ofankor",  Minister: "Rev. Kwabena Yeboah Mintah", Catechist: "Cat. Rose Asamoah Debrah" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539'  },
  { id: 11, name: "NOP", location: "West Taifa",  Minister: "Rev. Kwabena Yeboah Mintah", Catechist: "Cat. Mrs. Daniel Adamu" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539'  },
  { id: 12, name: "Ramseyer Congregation", location: "Taifa",  Minister: "Rev. Samuel Adu", Catechist: "Cat." , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539'  },
  { id: 13, name: "Redemption Congregation", location: "Pokuase",  Minister: "Rev. Jonathan Akuetteh Abbey", Catechist: "Cat. Agyeman Baffour" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539'  },
  { id: 14, name: "Katapor Preaching Point", location: "Katapor", Minister: "Rev. Kwabena Yeboah Mintah", Catechist: "Cat. Ebenezer Offei Nunoo" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539'  },
  { id: 15, name: "Ebenezer Congregation", location: "Dome",  Minister: "Rev. Emmanuel Addo Dankwah Siaw", Catechist: "Cat. Ebenezer Ayeni" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 16, name: "Logos Congregation", location: "Achimota College",  Minister: "Rev. Seth Som Gyampoh", Catechist: "Cat. Alfred Bempong" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539' },
  { id: 17, name: "Calvary Congregation", location: "Alogboshie",  Minister: "Rev. Solomon Mensah Tettey", Catechist: "Cat. Amegbe Kwadzo Adzasey" , ministerImage: '/Ministers/grace1.jpg', catechistImage:'/Catechists/grace1.PNG', officeLine: '+233507346539'  },
];

export default function Congregations() {
  return (
    <section className="py-14 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Congregations in Taifa District
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sampleCongregations.map((congregation) => (
            <CongregationCard
              key={congregation.id}
              congregation={congregation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
