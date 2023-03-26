import sys
import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# ------------------------------------------------------------------
def add_data_proc(db,note,idx,img_url):
    doc_ref = db.collection('2023k').document()
    doc_ref.set({
        'note'   : note,
        'idx'    : idx,
        'img_url': img_url,
    })
#
# ------------------------------------------------------------------
sys.stderr.write("*** 開始 ***\n")
try:
    cred = credentials.ApplicationDefault()
    cred = credentials.Certificate("nakamaru-bde80-firebase-adminsdk-xbpd3-321bc11266.json")
    firebase_admin.initialize_app(cred)

    db = firestore.client()

    add_data_proc(db,'20230301','00','12MgrI_Ehhqg5U5Md9JO5r5SSfJkjD6Da')
    add_data_proc(db,'20230301','01','1RlAFfK_a8E3UFLWQAU78G-pvMmN10mWj')
    add_data_proc(db,'20230301','02','1rzmlvtwK51yTNoGlVlnDdERjNr67SSlW')
    add_data_proc(db,'20230301','03','16_h13vJUCzB0eq9qj-Tx6rys2tPWvocx')
    add_data_proc(db,'20230301','04','1holACPUUPPPgUWiZjz7jM6r8-Pw71Wl9')
    add_data_proc(db,'20230301','05','1d4G0qoA3OrZC_OcZCECk3DpsiMCFszjJ')
    add_data_proc(db,'20230301','06','1EEs4mGPFOdRl-u53cercKYYMXkYqmXL-')
    add_data_proc(db,'20230301','07','197ZhoLsEbcGT-jU4DkfeDlFi9zWy0MoN')
    add_data_proc(db,'20230301','08','1xxZKCtgb5-7zaM1VmLad01dd1znmA-fY')
    add_data_proc(db,'20230301','09','1QrJ8GehXwl40dpHQ5BbKOBWMbtwFddKk')
    add_data_proc(db,'20230301','10','1iy7Y-dZKvxl_hO3X_R3ZdrT0x9HwOQuR')
    add_data_proc(db,'20230301','11','16xpg_v8Sk7eJzSOYcGE_3fHzqiiHXkrZ')
    add_data_proc(db,'20230301','12','1fJnxXCgwfK5cK-Y10cZPVCHtUpxW6C7w')
    add_data_proc(db,'20230301','13','1vql2Tgk0JfzmJlwfycDzcumvezCqsblX')
    add_data_proc(db,'20230301','14','1JAhenqoEPEvkI4tl7GyH2ZOTxX8rztFO')
    add_data_proc(db,'20230301','15','1mkx4zhX5hqCKxt65MPJp6j4y6HJVE2So')


except Exception as ee:
    sys.stderr.write("*** error *** in firestore.Client ***\n")
    sys.stderr.write(str(ee) + "\n")
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------

