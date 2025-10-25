from fastapi import FastAPI,File,UploadFile


app=FastAPI()



@app.get("/")

async def hello():
    return {"message":"hello world"}

@app.post("/upload-pdf")

async def upload_file(pdf:UploadFile):
    return {"filename":pdf.filename}
    