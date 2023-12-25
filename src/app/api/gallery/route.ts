import { NextResponse,NextRequest} from "next/server";

const data = [
    {
        id: 1,
        title : "gwchana",
        img : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1b3cc0b-373f-41e5-a228-11b1e5dc550b/court-vision-low-shoes-bv8p57.png"

    }
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
