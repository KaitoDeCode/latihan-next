import { NextResponse,NextRequest} from "next/server";

const data = [
    {
        id: 1,
        judul : "gwchana",

    },
    {
        id: 2,
        judul : "asdasd",

    },
    {
        id: 3,
        judul : "kuntul",

    },
    {
        id: 4,
        judul : "asdasdasd",

    },
]
export async function GET(request : NextRequest) {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id");

    if(id){
        const detailGallery = data.find(item=>item.id === Number(id));
        if (detailGallery) {
            return NextResponse.json({
                status:200,
                message: "success",
                data : detailGallery
            });
        }

        return NextResponse.json({
            status:404,
            message: "Not Found",
            data:{}
        });
    }

    return NextResponse.json({
        status:200,
        message: "success",
        data
    });
}
