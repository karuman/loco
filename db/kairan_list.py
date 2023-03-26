import sys
import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# ------------------------------------------------------------------
def add_data_proc(db,name,note,year):
    doc_ref = db.collection('kairan_list').document()
    doc_ref.set({
        'title': name,
        'note': note,
        'year': year,
    })
#
# ------------------------------------------------------------------
sys.stderr.write("*** 開始 ***\n")
try:
    cred = credentials.ApplicationDefault()
    cred = credentials.Certificate("nakamaru-bde80-firebase-adminsdk-xbpd3-321bc11266.json")    
    firebase_admin.initialize_app(cred)

    db = firestore.client()
#
    add_data_proc(db,'2023年03月15日','20230315','2023k')
    add_data_proc(db,'2023年03月15日総会資料','20230316','2023k')
    add_data_proc(db,'2023年03月01日','20230301','2023k')
    add_data_proc(db,'2023年02月15日','20230215','2023k')
    add_data_proc(db,'2023年02月01日','20230201','2023k')
    add_data_proc(db,'2023年01月15日','20230115','2023k')
    add_data_proc(db,'2022年12月15日','20221215','2022k')


except Exception as ee:
    sys.stderr.write("*** error *** in firestore.Client ***\n")
    sys.stderr.write(str(ee) + "\n")
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------

