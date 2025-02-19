type Info = {
  id: number;
  name: string;
  email: string;
};

// Admin Has some unique properties role and lastLogin but all other properties are same as that of Info and hence we reuse that Info Type and extend that for the admin.If not reused that INfo type we would have to write those three common feature of USer and Admin in both types of User and Admin as well.
type AdminInfoList = Info & {
  role: string;
  lastLogin: Date;
};

// We need to explicitly tell that we r exporting types
export { type Info, type AdminInfoList };
