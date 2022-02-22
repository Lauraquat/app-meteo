import { PageHeader, Button} from 'antd';

function Header({}){

    return(
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Title"
                    subTitle="This is a subtitle"
                    extra={[
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                        Primary
                        </Button>,
                    ]}
                >
                </PageHeader>
            </div>
    );    
}

export default Header;