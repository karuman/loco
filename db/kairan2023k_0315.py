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

    add_data_proc(db,'20230315','07','1w-o_U_nirrR0owAytA0tHJVPWC4fITyQ')
    add_data_proc(db,'20230315','06','1fL-ehUrz_3D5voGonN_iALu-nCR9NgA2')
    add_data_proc(db,'20230315','05','1HsloyxdC4Y9D5qL73ArFnKkePl3db-xd')
    add_data_proc(db,'20230315','04','1ZxCq5K5QNwGIq9MaktSkWfr46QO6bpcM')
    add_data_proc(db,'20230315','03','1h8A6eTnB8uv2vKj_bH62BfYM8LgJ3sgE')
    add_data_proc(db,'20230315','02','19wlcywlzYBTofDT2Oec1-i3vTENxTFUW')
    add_data_proc(db,'20230315','01','1eaCcGOiG3gBQTAAOUem5jBP6K6Pv4eui')
    add_data_proc(db,'20230315','00','1uSM8hU3zzxYHjMT6O4hAGInfUxyMMdXu')
    
    add_data_proc(db,'20230316','00','1l3OKcNT2sS_ql9SvND7OLS-bDWkUlsEm')
    add_data_proc(db,'20230316','01','11bw0b--xZ07q25b3jJbKAkLgXjY3W4rj')
    add_data_proc(db,'20230316','02','1jW0JH58XTvCgaEYPD527b6U9rQDSJTV9')
    add_data_proc(db,'20230316','03','1baq-PLeahRFUKIJZoS8398bLWss6f-r3')
    add_data_proc(db,'20230316','04','1j1jXa42gzx1K2A_d8S5rqEWo5ImUDmo2')
    add_data_proc(db,'20230316','05','1i4bvgNZyOlSjscswlyUVXm2otcPoBpih')
    add_data_proc(db,'20230316','06','1jC4jbdrUA-E62jncdh871EVLL64sYWwY')


except Exception as ee:
    sys.stderr.write("*** error *** in firestore.Client ***\n")
    sys.stderr.write(str(ee) + "\n")
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------

