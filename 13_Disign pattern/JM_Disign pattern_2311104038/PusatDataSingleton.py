class PusatDataSingleton:
    _instance = None

    def __init__(self):
        if PusatDataSingleton._instance is not None:
            raise Exception("Gunakan GetDataSingleton() untuk mendapatkan instance.")
        self.DataTersimpan = []

    @classmethod
    def GetDataSingleton(cls):
        if cls._instance is None:
            cls._instance = PusatDataSingleton()
        return cls._instance

    def GetSemuaData(self):
        return self.DataTersimpan

    def PrintSemuaData(self):
        if not self.DataTersimpan:
            print("Data kosong.")
        else:
            for data in self.DataTersimpan:
                print(data)

    def AddSebuahData(self, input):
        self.DataTersimpan.append(input)

    def HapusSebuahData(self, index):
        if 0 <= index < len(self.DataTersimpan):
            del self.DataTersimpan[index]
        else:
            print("Index tidak valid.")

if __name__ == "__main__":

    data1 = PusatDataSingleton.GetDataSingleton()
    data2 = PusatDataSingleton.GetDataSingleton()


    data1.AddSebuahData("raihan")              
    data1.AddSebuahData("gesa")             
    data1.AddSebuahData("zidan")            
    data1.AddSebuahData("revan (Asisten)")   

   
    print("Isi data dari data2 (Setelah penambahan):")
    data2.PrintSemuaData()

    
    print("\nMenghapus nama asisten dari data2...")
   
    semua_data = data2.GetSemuaData()
    try:
        index_asisten = semua_data.index("revan (Asisten)")
        data2.HapusSebuahData(index_asisten)
    except ValueError:
        print("Nama asisten tidak ditemukan.")

    print("\nIsi data dari data1 (Setelah penghapusan):")
    data1.PrintSemuaData()


    count1 = len(data1.GetSemuaData())
    count2 = len(data2.GetSemuaData())
    print(f"\nJumlah data di data1: {count1}")
    print(f"Jumlah data di data2: {count2}")
