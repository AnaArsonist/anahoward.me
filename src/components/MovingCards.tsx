import React from "react";

const MovingCards = () => {
  const bigCard = "md:w-56 md:h-72 w-28 h-36";
  const littleCard = "md:w-28 md:h-36 w-12 h-16";

  const card = "card bg-white/5 text-white absolute rounded-2xl transition hover:cubic-bezier-(0.05, 0.43, 0.25, .95) duration-500 transform bg-cover";

  return (
    <div className="group flex items-center justify-center">
      <div className={`${bigCard} ${card} -translate-x-6 -rotate-1 group-hover:-translate-x-20 group-hover:translate-y-6 group-hover:rotate-[-12deg] md:group-hover:-translate-x-40 md:group-hover:translate-y-12 md:group-hover:rotate-[-12deg] bg-[url('https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]`} />
      <div className={`${littleCard} ${card} group-hover:-translate-x-28 group-hover:translate-y-28 md:group-hover:-translate-x-72 md:group-hover:translate-y-52 md:group-hover:rotate-[-12deg] bg-[url('https://images.unsplash.com/photo-1615111784767-4d7c527f32a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]`} />
      <div className={`${bigCard} ${card} rotate-2 group-hover:-translate-x-8  group-hover:rotate-[-12deg] group-hover:translate-y-3 md:group-hover:-translate-x-16 md:group-hover:translate-y-6 md:group-hover:rotate-[-8deg] bg-[url('https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]`} />
      <div className={`${littleCard} ${card} group-hover:-translate-x-32 group-hover:-translate-y-14 group-hover:rotate-[-6deg] md:group-hover:-translate-x-80 md:group-hover:-translate-y-28 md:group-hover:rotate-[15deg] bg-[url('https://images.unsplash.com/photo-1549545931-59bf067af9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')]`} />
      <div className={`${bigCard} ${card} -translate-x-4 -rotate-3 group-hover:translate-x-8 group-hover:translate-y-3 md:group-hover:translate-x-16 md:group-hover:translate-y-6 md:group-hover:rotate-[8deg] bg-[url('https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')]`} />
      <div className={`${littleCard} ${card} group-hover:translate-x-32 group-hover:-translate-y-14 group-hover:rotate-[6deg] md:group-hover:translate-x-72 md:group-hover:-translate-y-28 md:group-hover:rotate-[-15deg] bg-[url('https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]`} />
      <div className={`${littleCard} ${card} group-hover:translate-x-28 group-hover:translate-y-28 group-hover:rotate-[-15deg] md:group-hover:translate-x-72 md:group-hover:translate-y-52 md:group-hover:rotate-[-15deg] bg-[url('https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]`} />
      <div className={`${bigCard} ${card} translate-6 rotate-5 group-hover:translate-x-20 group-hover:translate-y-6 group-hover:rotate-[12deg] md:group-hover:translate-x-40 md:group-hover:translate-y-12 md:group-hover:rotate-[12deg] bg-[url('https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80')]`} />
      
    </div>
  );
};

export default MovingCards;
