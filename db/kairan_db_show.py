import sys
import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


#
# ------------------------------------------------------------------
sys.stderr.write("*** 開始 ***\n")
try:
    cred = credentials.ApplicationDefault()
    cred = credentials.Certificate("nakamaru-bde80-firebase-adminsdk-xbpd3-321bc11266.json")    
    firebase_admin.initialize_app(cred)

    db = firestore.client()

    docs = db.collection("kairan_list").stream()
    for doc in docs:
        print(doc.id, ":", doc.to_dict())

    print("query ")

    query = db.collection("kairan_list").where("year", "==", "2022k")
    docs = query.get()
    for doc in docs:
        print(doc.id, ":", doc.to_dict())

    print("2023k db")

    query = db.collection("2023k").where("note", "==", "20230301").order_by("idx")
    docs = query.get() 
    for doc in docs:
        print(doc.id, ":", doc.to_dict())


except Exception as ee:
    sys.stderr.write("*** error *** in firestore.Client ***\n")
    sys.stderr.write(str(ee) + "\n")
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------

